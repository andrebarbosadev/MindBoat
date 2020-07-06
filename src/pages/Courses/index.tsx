import React, { useState, useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, Image } from "react-native";
import { Card, Button, List, Appbar, Divider, useTheme } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Courses = () => {
    const navigation = useNavigation();

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Cursos" />
            </Appbar.Header>

            <ScrollView>
                <View style={styles.container}>
                    <Text style={ styles.titleText }>
                        Cursos em Segurança do Trabalho
                    </Text>
                    <ScrollView horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 8}}>
                        <TouchableOpacity style={ styles.courseItem }>
                            <View style = { styles.iconCourse }>
                                <View>
                                    <Image style={ styles.courseImage } source={ require("../../../assets/NR10.png") }/>
                                </View>
                                <View style={styles.courseDescription}>
                                    <Text style={ styles.textTitleCourse }>NR-10</Text>
                                    <Text>Segurança em instalações elétricas</Text>
                                    <Text>8 horas/aula</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.courseItem }>
                            <View style = { styles.iconCourse }>
                                <View>
                                    <Image style={ styles.courseImage } source={ require("../../../assets/NR35.png") }/>
                                </View>
                                <View style={styles.courseDescription}>
                                    <Text style={ styles.textTitleCourse }>NR-10</Text>
                                    <Text>Segurança em instalações elétricas</Text>
                                    <Text>8 horas/aula</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.container}>
                    <Text style={ styles.titleText }>
                        Cursos em Manutenção de Rebocadores
                    </Text>
                    <ScrollView horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 8}}>
                        <TouchableOpacity style={ styles.courseItem }>
                            <View style = { styles.iconCourse }>
                                <View>
                                    <Image style={ styles.courseImage } source={ require("../../../assets/tugboat_inspection.png") }/>
                                </View>
                                <View style={styles.courseDescription}>
                                    <Text style={ styles.textTitleCourse }>Rebocador ASD 2411</Text>
                                    <Text>Roteiro de Inspeções</Text>
                                    <Text>2 horas/aula</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.courseItem }>
                            <View style = { styles.iconCourse }>
                                <View>
                                    <Image style={ styles.courseImage } source={ require("../../../assets/tugboat_engine.jpg") }/>
                                </View>
                                <View style={styles.courseDescription}>
                                    <Text style={ styles.textTitleCourse }>Rebocador ASD 2411</Text>
                                    <Text>Sistema de Propulsão</Text>
                                    <Text>16 horas/aula</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.container}>
                    <Text style={ styles.titleText }>
                        Cursos em Primeiros Socorros
                    </Text>
                    <ScrollView horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 8}}>
                        <TouchableOpacity style={ styles.courseItem }>
                            <View style = { styles.iconCourse }>
                                <View>
                                    <Image style={ styles.courseImage } source={ require("../../../assets/first_rescue.jpg") }/>
                                </View>
                                <View style={styles.courseDescription}>
                                    <Text style={ styles.textTitleCourse }>Itens Primeiros Socorros</Text>
                                    <Text>Curativos, Medicação</Text>
                                    <Text>4 horas/aula</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.container}>
                    <Text style={ styles.titleText }>
                        Combate a Incêndios
                    </Text>
                    <ScrollView horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 8}}>
                        <TouchableOpacity style={ styles.courseItem }>
                            <View style = { styles.iconCourse }>
                                <View>
                                    <Image style={ styles.courseImage } source={ require("../../../assets/extintor.png") }/>
                                </View>
                                <View style={styles.courseDescription}>
                                    <Text style={ styles.textTitleCourse }>Utilização de Extintores</Text>
                                    <Text>Tipo A, B e C</Text>
                                    <Text>1 horas/aula</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>
        </>
    );
};

export default Courses;