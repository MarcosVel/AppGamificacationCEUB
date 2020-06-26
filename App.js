import React, { Component } from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import axios from 'axios';

export default class App extends Component {
   
    componentDidMount() {
        const url = 'URL DE ACESSO'
        
        axios.post(url,
        {
        "idOperacao": 1,
        "ClientKey": "{CHAVE DE ACESSO}"
        })
            // data
            // .then(function(response){ 
            //     console.log(response)
            // })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    };  
        
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
