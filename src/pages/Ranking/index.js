import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFeat from 'react-native-vector-icons/Feather';
Icon.loadFont();
IconFeat.loadFont();
import { Text, View, TouchableOpacity, Button } from 'react-native';
import Header from '../../componentes/Header';

import { TableList } from '../../componentes/AppComponents';

import styles from './style';

export default function Ranking () {
    const navigation = useNavigation();

    const title = 'Ranking';
        
    function navigationToConfig() {     //função para navegação para navegar entre as páginas (declarado lá no botão entrar);
         navigation.navigate('Configuracoes');
    }

    return (
        
            <>
                <Header title={title} />
                <View style={styles.box1}>
                    {/* <View style={styles.headericons}>
                        <View style={styles.headerleft}>
                            <Icon style={styles.account} name="account-circle" size={28} color="#856894" />                                
                            <Text style={styles.profile}>Ranking</Text>
                        </View>
                        <View style={styles.headerright}>                            
                            <TouchableOpacity style={styles.effecticons} onPress={navigationToConfig}>
                                <IconFeat style={styles.settings} name="settings" size={25} color="#856894" /> 
                            </TouchableOpacity>
                        </View>
                    </View> */}
                </View>
                
                <View style={styles.box2}>
                    <TableList />
                </View>
            </>
    );
}

//daniel.almeida@uniceub.br - Daniel API