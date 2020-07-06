import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Slider } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { Dropdown, DropDownData } from "react-native-material-dropdown";
import { Appbar, TextInput, Button, Headline } from "react-native-paper";
import styles from './styles';

const Profile = () => { 

    const navigation = useNavigation();

    function handleNavigationBack() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { handleNavigationBack() }} />
                <Appbar.Content title="Perfil" />
            </Appbar.Header>
            <ScrollView>
                <View>
                    <Headline>Antônio José da Silva</Headline>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;