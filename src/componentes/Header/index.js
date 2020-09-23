import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
import IconFeat from 'react-native-vector-icons/Feather';
IconFeat.loadFont();
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Header = ({ title }) => {

    const navigation = useNavigation();

    function navigationToConfig() {     //função para navegação para navegar entre as páginas (declarado lá no botão entrar);
        navigation.navigate('Configuracoes');
    }

    return (
        <View style={styles.header}>
            <View style={[styles.headerleft]}>
                <Icon style={[styles.account]} name="account-circle" size={28} color="#856894" />
                <Text style={[styles.txtHeader]}>{title}</Text>
            </View>
            <TouchableOpacity onPress={navigationToConfig}>
                <IconFeat style={[styles.settings]} name="settings" size={25} color="#856894" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 56,
        backgroundColor: '#220536'
    },
    headerleft: {
        flexDirection: 'row',
        //marginLeft: 5,
    },
    txtHeader: {
        fontSize: 23,
        fontFamily: 'Roboto',
        color: '#856894',
        marginLeft: 8,
    },
    account: {
        marginLeft: 15,
        marginTop: 2,
    },
    settings: {
        marginRight: 15,
    },
});

export default Header;