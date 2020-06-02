import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    View, 
    Image, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity, 
    Text,
    Animated,
    Keyboard
} from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './style';

export default function EsqueciSenha () {
    const navigation = useNavigation();

    function navigateBack() { //Função para volta a página anterior
        navigation.goBack()
    }

    //CRIANDO VALOR DA ANIMAÇÃO
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({x:130, y:155}));

    //abrir o aplicativo terá o efeito
    useEffect(()=> {
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
        

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20                
            }),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 200
            })
        ]).start();   

    }, []);


    function keyboardDidShow(){
        
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 55,
                duration: 100,
            }),
            Animated.timing(logo.y, {
                toValue: 70,
                duration: 100,
            }),
        ]).start();
          
    }

    function keyboardDidHide(){
        
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 130,
                duration: 100,
            }),
            Animated.timing(logo.y, {
                toValue: 155,
                duration: 100,
            }),
        ]).start();

    }

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}> 
                <Animated.Image 
                style={{
                    width:logo.x,
                    height: logo.y,
                }}
                source={logoImg} />
            </View>
            
                <TextInput
                style={styles.textinput}
                placeholder="E-mail" 
                placeholderTextColor="#453352"
                autoCorrect={false}
                onChangeText={()=> {}}
                />

                <TextInput
                style={styles.textinput}
                secureTextEntry={true}
                placeholder="Nova Senha" 
                placeholderTextColor="#453352" //"#5e2b80"
                autoCorrect={false}
                onChangeText={()=> {}}
                />

                <TextInput
                style={styles.textinput}
                placeholder="Repita sua nova senha" 
                secureTextEntry={true}
                placeholderTextColor="#453352" //"#5e2b80"
                autoCorrect={false}
                onChangeText={()=> {}}
                />

                <TouchableOpacity style={styles.btnRedefinir} onPress={navigateBack}>
                    <Text style={styles.redefinirText}>REDEFINIR SENHA</Text>
                </TouchableOpacity>

        </KeyboardAvoidingView>
    );
}