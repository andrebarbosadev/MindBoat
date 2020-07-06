import React, { useState } from "react";
import { View, Text, ScrollView, ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Appbar, TextInput, Card, Button, useTheme } from 'react-native-paper';

import { boats } from '../../storage';
import styles from "./styles";

const ChangeBoat = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const [search, setSearch] = useState("");

    function handleNavigateToDetail(id: number) {
        //navigation.navigate("BoatComparison", { reward_id: id });
    }

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Ambientação" />
            </Appbar.Header>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Escolha a próxima embarcação de trabalho</Text>
                    <TextInput
                        mode="outlined"
                        label='Buscar'
                        value={search}
                        style={styles.input}
                        onChangeText={text => setSearch(text)}
                    />

                    <View style={styles.gridList}>
                        {boats.map(boat => (
                            <Card key={boat.id} style={styles.card}>
                                <Card.Cover source={boat.image as ImageSourcePropType} />
                                <Card.Content style={styles.cardContent}>
                                    <Text style={styles.rewardTitle}>{boat.name}</Text>
                                    <Text style={styles.rewardDescription}>{boat.description}</Text>
                                </Card.Content>
                                <View style={styles.cardActions}>
                                    <Button
                                        dark={true}
                                        mode="contained"
                                        color={colors.accent}
                                        onPress={() => { handleNavigateToDetail(boat.id) }}>SELECIONAR</Button>
                                </View>
                            </Card>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default ChangeBoat;