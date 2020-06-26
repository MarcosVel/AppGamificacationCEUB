import React, { Component } from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import axios from 'axios';

export default class App extends Component {
   
    componentDidMount() {
        const url = 'https://servicos.uniceub.br/api/sistema/passaporte'
        
        axios.post(url,
        {
        "idOperacao": 1,
        "ClientKey": "R0FNSUZJQ0FUSU9OOitrNldxSlZJcnE3S3A4S0I4RU42MkVoWE85eWQyU2xnek5wS0VYZUt0Um89"
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