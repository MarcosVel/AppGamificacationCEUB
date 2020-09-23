import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../../componentes/Header';

import styles from './style';

export default function Ticket() {

    const title = 'Ticket';
    return (
        <>
            <Header title={title} />
            <View style={styles.container}>
                <Text style={styles.textPage}>Ticket</Text>
            </View>
        </>
    );
}
