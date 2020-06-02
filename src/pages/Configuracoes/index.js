import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

export default function Configuracoes () {
    return (
        <View style={styles.container}>
            <Text style={styles.textPage}>Configurações ⚙</Text>
        </View>
    );
}