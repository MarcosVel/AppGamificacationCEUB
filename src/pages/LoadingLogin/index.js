import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default class LoadingLogin extends Component {
    render () {
        return (
            <View style={styles.container}>
            <StatusBar
                barStyle="light-content" //barra para qnd backgroud for escuro
                hidden={false}              //não esconder a barra
                backgroundColor= '#330066'                               
            />
            <Text style={{fontSize: 42}}>Status Bar</Text>            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})