import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Appbar, FAB, List, Card, Title, Paragraph } from 'react-native-paper';
import { Video } from 'expo-av';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { points as StoragePoints } from "../../storage";
import { InterestPoint } from "../../entities/Entities";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

interface Params {
    point_id: number;
}

interface BoatVideo {
    name: string;
    watched: boolean;
    uri: string;
}

const Boat = () => {
    const [point, setPoint] = useState<InterestPoint>({} as InterestPoint);
    const points: InterestPoint[] = StoragePoints;

    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params as Params;

    const [videos, setVideos] = useState<BoatVideo[]>([]);

    useEffect(() => {
        setVideos([{
            name: 'Visão Geral',
            watched: false,
            uri: 'https://discovirtual.itaipu.gov.br/index.php/s/SyDzL4DKegjmpEP/download'
        }, {
            name: 'Conhecendo a embarcação',
            watched: true,
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
        }]);
    }, []);

    function handleNavigationBack() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Appbar.Header style={styles.transparentAppBar} dark={true}>
                <Appbar.BackAction onPress={() => handleNavigationBack() } />
                <Appbar.Content title="WS Aries" />
            </Appbar.Header>
            <View style={styles.imageContainer}>
                <Image style={ styles.imageTitle} source={require('../../../assets/tugboat_ws_aries.jpg')}/>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>WS Aries</Text>
                </View>
                <View>
                    <View>
                    <Text style={ styles.subtitle }>Características Técnicas</Text>
                    <ScrollView horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20}}>
                        <TouchableOpacity 
                            onPress={() => {}} 
                            style={[
                                    styles.item 
                                ]}
                            activeOpacity={0.6}>
                            <MaterialCommunityIcons name="arrow-up-down-bold" size={48} color="black" />
                            <View style = { styles.iconText } >
                                <Text style={styles.itemTitle}>Comprimento</Text>
                                <Text style={styles.itemTitle}>20,30 m</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {}} 
                            style={[
                                    styles.item 
                                ]}
                            activeOpacity={0.6}>
                            <MaterialCommunityIcons name="arrow-left-right-bold" size={48} color="black" />
                            <View style = { styles.iconText } >
                                <Text style={styles.itemTitle}>Boca</Text>
                                <Text style={styles.itemTitle}>10,20 m</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {}} 
                            style={[
                                    styles.item 
                                ]}
                            activeOpacity={0.6}>
                            <MaterialCommunityIcons name="weight" size={48} color="black" />
                            <View style = { styles.iconText } >
                                <Text style={styles.itemTitle}>Bollard Pull</Text>
                                <Text style={styles.itemTitle}>40-70 Ton</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => {}} 
                            style={[
                                    styles.item 
                                ]}
                            activeOpacity={0.6}>
                            <MaterialCommunityIcons name="view-list" size={48} color="black" />
                            <View style = { styles.iconText } >
                                <Text style={styles.itemTitle}>Reboque, escolta,</Text>
                                <Text style={styles.itemTitle}>combate a incêncio</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                    </View>
                    <View style={styles.container}>
                        <Card>
                            <Card.Content>
                                <Title>Vídeos Relacionados</Title>
                                {videos.map(video => (
                                    <View key={video.name} style={styles.videoContainer}>
                                        <View style={styles.cardTitleContent}>
                                            <Text style={styles.titleText}>{video.name}</Text>
                                            {video.watched && 
                                                <>
                                                    <Text style={styles.watched}>
                                                        Assistido 
                                                    </Text>
                                                    <MaterialIcons name="done-all" style={styles.icon} size={12} />
                                                </>
                                            }
                                        </View>
                                        <Video
                                            source={{ uri: video.uri }}
                                            rate={1.0}
                                            volume={1.0}
                                            isMuted={false}
                                            resizeMode="cover"
                                            useNativeControls
                                            style={{ height: 200 }}
                                        />
                                    </View>
                                ))}
                            </Card.Content>
                        </Card>
                    </View>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
};

export default Boat;