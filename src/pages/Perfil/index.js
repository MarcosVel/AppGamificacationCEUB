import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFeat from 'react-native-vector-icons/Feather';
Icon.loadFont();
IconFeat.loadFont();
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Header from '../../componentes/Header';

import FotoStuart from '../../assets/Stuart-Little.jpg';
import styles from './style';

// const { height } = Dimensions.get('window'); 
// const boxCount = 2; 
// const boxHeight = height / boxCount;

export default function Perfil() {

    const navigation = useNavigation();

    const title = 'Perfil';

    function navigationToConfig() {     //função para navegação para navegar entre as páginas (declarado lá no botão entrar);
        navigation.navigate('Configuracoes');
    }

    return (
        
        <>
            <Header title={title} />
            <View style={[styles.box1]}>
                <View style={[styles.viewProfile]}>
                    <Image source={FotoStuart} style={[styles.imgperfil]} />
                    <View style={[styles.descProfile]}>
                        <Text style={[styles.nameProfile]}>Stuart Little</Text>
                        <Text style={[styles.cursoProfile]}>Análise e Desenvolvimento de Sistemas</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.boxConquitas]}>
                <FlatList
                    style={styles.incidentList}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 40 }}
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={incident => String(incident)}
                    renderItem={() => (
                        <View style={styles.incident}>
                            <Text style={styles.incidentProperty}>CONQUISTA:</Text>
                            <Text style={styles.incidentValue}>Rato exemplar</Text>

                            <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                            <Text style={styles.incidentValue}>Parabêns você está fechando seu semestre com todas as notas SS.</Text>

                            <TouchableOpacity style={styles.detailsButton} onPress={() => { }}>
                                <Text style={styles.detailsButtonText}>Ver emblema</Text>
                                <IconFeat name="star" size={16} color="#B51D9E" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>

        </>
    );
}
