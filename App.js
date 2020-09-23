import React, { Component } from 'react';
import Routes from './src/routes';
import { StatusBar, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import axios from 'axios';
import { _storeData , _retrieveData } from './src/helpers/LocalStorage';

export default class App extends Component {
    
    //Local Storage conexão com a API versão 1.0
    //
    // async componentDidMount() {
    //     const url = 'https://servicos.uniceub.br/api/sistema/passaporte'
    // }
   
    // componentDidMount() {
    //     const url = 'URL DE ACESSO'
        
    //     axios.post(url,
    //     {
    //     "idOperacao": 1,
    //     "ClientKey": "{CHAVE DE ACESSO}"
    //     })
    //     // .then((response) => {
    //     //     console.log(response.data.data.Credencial);
    //     // })
    //     .then((response) => {
    //         this._storeData (
    //             'Credencial',
    //             response.data.data.Credencial
    //             );
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    //     //console.log("Teste");
    //     console.log(this._retrieveData('Credencial'));
    // };  

    // _storeData = async (key, valor) => {
    //     try {
    //       await AsyncStorage.setItem(
    //         key,
    //         valor
    //       );
    //     } catch (error) {
    //         console.log(error);
    //       // Error saving data
    //     }
    // };

    // _retrieveData = async (key) => {
    //     var value = "";
        
    //     try {
    //         value = await AsyncStorage.getItem(key);
    //     } catch (error) {
    //         console.log(error);
    //       // Error retrieving data
    //     }
    //     return value;
    // };

        
    render() {
        return (
        <NavigationContainer>
            <StatusBar
                    barStyle="light-content" //barra para qnd backgroud for escuro
                    hidden={false}              //não esconder a barra
                    backgroundColor= '#220536'                               
            />
            <Routes />
        </NavigationContainer>
        );
    }
}
