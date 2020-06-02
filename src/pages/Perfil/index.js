import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFeat from 'react-native-vector-icons/Feather';
Icon.loadFont();
IconFeat.loadFont();
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import FotoStuart from '../../assets/Stuart-Little.jpg';
import styles from './style';

// const { height } = Dimensions.get('window'); 
// const boxCount = 2; 
// const boxHeight = height / boxCount;

export default function Perfil () {

    const navigation = useNavigation();
        
    function navigationToConfig() {     //função para navegação para navegar entre as páginas (declarado lá no botão entrar);
         navigation.navigate('Configuracoes');
    }

    return ( 
        <View style={[styles.container]}>
            <View style={[styles.box, styles.box1]}>    
                <View style={[styles.headericons]}>
                    <View style={[styles.headericons, styles.headerleft]}>
                        {/* <TouchableOpacity style={styles.effecticons} onPress={() => {}}>
                            <Icon style={[styles.menu]} name="menu" size={36} color="#675074" />
                        </TouchableOpacity> */}
                        <Icon style={[styles.account]} name="account-circle" size={28} color="#675074" />                                
                        <Text style={[styles.profile]}>Perfil</Text>
                    </View>
                    <View style={[styles.headericons, styles.headerright]}>                            
                        <TouchableOpacity style={[styles.effecticons]} onPress={navigationToConfig}>
                            <IconFeat style={[styles.settings]} name="settings" size={25} color="#675074" /> 
                        </TouchableOpacity>
                    </View>                        
                </View>    
                <View style={[styles.viewProfile]}>                        
                    <Image source={FotoStuart} style={[styles.imgperfil]}/>
                    <View style={[styles.descProfile]}>
                        <Text style={[styles.nameProfile]}>Stuart Little</Text>
                        <Text style={[styles.cursoProfile]}>Análise e Desenvolvimento de Sistemas</Text>
                    </View>
                </View>                  
            </View>
            <View style={[styles.box, styles.boxConquitas]}>
                {/* <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>                         */}
                    <FlatList
                        style={styles.incidentList}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 40}}
                        data={[1, 2, 3, 4, 5]}
                        keyExtractor={incident => String(incident) }
                        renderItem={() => (
                            <View style={styles.incident}>
                                <Text style={styles.incidentProperty}>CONQUISTA:</Text>
                                <Text style={styles.incidentValue}>Rato exemplar</Text>

                                <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                                <Text style={styles.incidentValue}>Parabêns você está fechando seu semestre com todas as notas SS.</Text>

                                <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
                                    <Text style={styles.detailsButtonText}>Ver emblema</Text>
                                    <IconFeat name="star" size={16} color="#B51D9E" />
                                </TouchableOpacity>
                            </View> 
                        )}                    
                    />                    
                {/* </ScrollView> */}
            </View>
            
        </View>
    );
}


    // const styles = StyleSheet.create({
    //     container: {
    //         flex: 1,
    //         flexDirection: 'column',
    //     },
    //     box: {
    //         flex: 2.9,
    //         height: boxHeight
    //     },
    //     //header 
    //     box1: { 
    //         flex: 1, 
    //         backgroundColor: '#220536', 
    //     },        

    //     //content 
    //     box2: { 
    //         flex: 9, 
    //         backgroundColor: '#FFF',
    //     },

    //     boxConquitas: {
    //         paddingHorizontal: 24,            
    //     },



    //     //CRIADO POR NÓS
    //     headericons: {
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         marginTop: 2,  
    //         marginLeft: 1,
    //         marginRight: 1, 
    //     },
        
    //     headerleft: {
    //         flexDirection: 'row',         
    //         marginLeft: 5,
    //     },

    //     headerright: {
    //         flexDirection: 'row',         
    //         marginRight: 5,
    //     },

    //     //icon bars
    //     menu: {            
    //         marginLeft: 12,
    //         marginTop: 0,     
    //     },

    //     //icon perfil
    //     account: {       
    //         marginLeft: 15,
    //         marginTop: 4,     
    //     },

    //     //icon engrenagem
    //     settings: {       
    //         marginRight: 13,
    //         marginTop: 2.2,     
    //     },

    //     //escrito Perfil
    //     profile: {
    //         fontSize: 25,
    //         fontFamily: 'Roboto',
    //         color: '#675074',            
    //         marginLeft: 10,
    //         marginTop: 0.9,
    //     },   

    //     viewProfile: {        
    //         flexDirection: 'row',
    //         marginTop: 17,
    //         marginLeft: 20,
    //     },

    //     descProfile: {      
    //         flex: 1,  
    //         flexDirection: 'column',   
    //         marginTop: 3,    
    //     },
        
    //     nameProfile: {
    //         fontSize: 25,
    //         fontFamily: 'Roboto',
    //         color: '#fff',
    //         //textAlign: 'right',
    //         marginLeft: 15,
    //     },   
    //     cursoProfile: {
    //         fontSize: 15,
    //         fontFamily: 'Roboto',
    //         color: '#737380',
    //         //textAlign: 'right',
    //         marginLeft: 15,
    //     }, 

    //     imgperfil: {
    //        width: 120,
    //        height: 120,
    //        //flexDirection: 'row',
    //        alignSelf: 'flex-start',
    //        //marginLeft: 20,
    //        //margin: 'auto',
    //        //resizeMode: "contain",
    //        //alignSelf: 'center',    
    //        borderWidth: 1,
    //        borderRadius: 85,           
    //        overflow: "hidden",
    //        borderWidth: 3,
    //        borderColor: "#F0CC25"
    //     },
        
    //     effecticons: {
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         alignItems: 'center'
    //     },

    //     textin: {
    //         fontSize: 25,
    //         fontFamily: 'Roboto',
    //         color: 'black',
    //     },
        
    //     //ESTILO FLATLIST
    //     incidentList: {            
    //         paddingTop: 30,
    //     },
    
    //     incident: {
    //         padding: 24,
    //         borderRadius: 8,
    //         backgroundColor: '#FFF',
    //         marginBottom: 16,            
    //     },
    
    //     incidentProperty: {
    //         fontSize: 14,
    //         color: '#41414D',
    //         fontWeight: 'bold'
    //     },
    
    //     incidentValue: {
    //         marginTop: 8,
    //         fontSize: 15,
    //         marginBottom: 24,
    //         color: '#737380'
    //     },
    
    //     detailsButton: {
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         alignItems: 'center'
    //     },
    
    //     detailsButtonText: {
    //         color: '#B51D9E', //'#E02041',
    //         fontSize: 15,
    //         fontWeight: 'bold'
    //     }

    // });
    