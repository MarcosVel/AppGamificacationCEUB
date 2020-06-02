import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
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