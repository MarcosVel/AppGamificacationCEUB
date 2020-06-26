import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

export default function Ticket () {
    return (
        <View style={styles.container}>
            <Text style={styles.textPage}>Ticket</Text>
        </View>
    );
}