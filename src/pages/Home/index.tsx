import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { Avatar } from 'react-native-paper';
import { MaterialIcons, FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

import styles from './styles'

const Home = () => {

    const navigation = useNavigation();

    function handleNavigateCourses() {
        navigation.navigate('Courses');
    }

    function handleNavigateBoat() {
        navigation.navigate('Boat');
    }

    function handleNavigateProfile() {
        navigation.navigate('Profile');
    }

    function handleNavigateChangeBoat() {
        navigation.navigate('ChangeBoat');
    }

    function handleNavigateMyCourses() {
        navigation.navigate('MyCourses');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: "#1976D2", height: Constants.statusBarHeight }} />
            <View style={styles.container}>
                <View style={styles.extendedToolbar}>
                    <TouchableOpacity onPress={() => handleNavigateProfile()}>
                        <Avatar.Image size={120} source={require("../../../assets/profile.jpg")} />
                    </TouchableOpacity>
                    <Text style={styles.username}>Antônio José da Silva</Text>
                    <Text style={styles.points}>Chefe de Máquinas</Text>
                </View>
            </View>

            <ScrollView>
                <View style={styles.content}>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => handleNavigateBoat()}>
                                <View style={styles.buttonContent}>
                                    <MaterialIcons name="directions-boat" size={48} color="black" />
                                    <Text>Minha</Text>
                                    <Text>Embarcação</Text>
                                </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => handleNavigateCourses()}>
                                <View style={styles.buttonContent}>
                                    <FontAwesome name="mortar-board" size={48} color="black" />
                                    <Text style={styles.text}>Cursos</Text>
                                </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => handleNavigateMyCourses() }>
                                <View style={styles.buttonContent}>
                                    <FontAwesome5 name="chalkboard-teacher" size={48} color="black" />
                                    <Text style={styles.text}>Meus Cursos</Text>
                                </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => handleNavigateChangeBoat() }>
                                <View style={styles.buttonContent}>
                                    <Entypo name="swap" size={48} color="black" />
                                    <Text style={styles.text}>Ambientação</Text>
                                </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;