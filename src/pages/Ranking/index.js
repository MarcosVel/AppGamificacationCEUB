import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFeat from 'react-native-vector-icons/Feather';
Icon.loadFont();
IconFeat.loadFont();
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './style';

export default function Ranking () {
    const navigation = useNavigation();
        
    function navigationToConfig() {     //função para navegação para navegar entre as páginas (declarado lá no botão entrar);
         navigation.navigate('Configuracoes');
    }

    return (
        <View style={[styles.container]}>
            <View style={styles.box, styles.box1}>
                <View style={styles.headericons}>
                    <View style={styles.headerleft}>
                        {/* <TouchableOpacity style={styles.effecticons} onPress={() => {}}>
                            <Icon style={[styles.menu]} name="menu" size={36} color="#675074" />
                        </TouchableOpacity> */}
                        <Icon style={styles.account} name="account-circle" size={28} color="#675074" />                                
                        <Text style={styles.profile}>Ranking</Text>
                    </View>
                    <View style={[styles.headerright]}>                            
                        <TouchableOpacity style={styles.effecticons} onPress={navigationToConfig}>
                            <IconFeat style={styles.settings} name="settings" size={25} color="#675074" /> 
                        </TouchableOpacity>
                    </View>                        
                </View>
            </View>
        </View>
        
    );
}