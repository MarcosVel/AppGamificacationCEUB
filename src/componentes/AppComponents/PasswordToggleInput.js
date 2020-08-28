import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

import styles from './../../pages/TelaLogin/style';

export default class PasswordToggleInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secureTextEntry: true,
            iconName: "ios-eye",
        }
    }

    onIconPress = () => {
        let iconName = (this.state.secureTextEntry) ? "ios-eye-off" : "ios-eye";

        this.setState({
            secureTextEntry: !this.state.secureTextEntry,            
            iconName: iconName
        });
    }

    render() {
        return (
            <View style={{flexDirection: 'row', borderRadius: 7, borderBottomColor: '#B51D9E', borderBottomWidth: 1,}}>
                <TextInput {...this.props}
                    style={{flex: 1, color: '#fff', marginBottom: 10, fontSize: 17, paddingHorizontal: 8, fontWeight: 'bold'}}
                    secureTextEntry={this.state.secureTextEntry}
                    placeholder="Senha"
                    placeholderTextColor= "#675074"
                />
                <TouchableOpacity onPress={this.onIconPress}>
                    <Icon style={{marginRight: 11, marginTop: 4}} name={this.state.iconName} size={23} color="#B51D9E" />
                </TouchableOpacity>
            </View>
        );
    }
}

//https://www.youtube.com/watch?v=IZ3OMIxdrAU