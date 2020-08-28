import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    View, 
    Linking, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity, 
    Text,
    Animated,
    Keyboard,
    StatusBar,
    ScrollView
} from 'react-native';
import axios from 'axios';

import logoImg from '../../assets/logoicon3.png';

import styles from './style';

import { PasswordToggleInput } from '../../componentes/AppComponents';

import { Passport } from '../../componentes/AppComponents';

export default function TelaLogin () {
    const navigation = useNavigation();

    function navigationToEsqueciSenha() {     //função para navegação para pag details;
        //navigation.navigate('Perfil');
        Linking.openURL(`https://www.ea.uniceub.br/Sistema/Acesso/RecuperarSenha`);
    }

    function navigationToEntrar() {     //função para navegação para navegar entre as páginas (declarado lá no botão entrar);
        //Conexão com a API com o jogador para conseguir colocar os dados

        // const url = 'https://eaplay.api.uniceub.br/api/game/jogador'
        
        // const config = {
        //  headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZWFwbGF5LmFwaS51bmljZXViLmJyIiwibmFtZWlkIjoiR0FNSUZJQ0FUSU9OIiwibmJmIjoxNTk0MjM1NTc1LCJleHAiOjE1OTQzMjE5NzUsImlhdCI6MTU5NDIzNTU3NSwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNvcy51bmljZXViLmJyLyJ9.KkXAop_0ok3xxRKZtaaritXtTg2T6rNQCgH8gfUIfm8` }
        // };


        // axios.post(url,
        // {
        //     "idOperacao": 3,
        //     "RA": "21903275",
        //     "SENHA": "Lucas14092000",
        // },
        // config
        // )
        
        // .then((response) => {
        //     // this._storeData (
        //     //     'Nome',
        //     //     response.data.data.Nome
        //     //     );
        //     console.log(response.data.data)
            
        // })

        // .catch(function (error) {
        //     console.log(error);
        // })



        // PARTE 2

        // console.log(await this._retrieveData('Nome'));

        // const url = 'https://eaplay.api.uniceub.br/api/game/jogador'
        
        // axios.post(url,
        // {
        // "idOperacao": 3,
        // "RA": "21903275",
        // "SENHA": "Lucas14092000" 
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
        
        navigation.navigate('Perfil');
    }

        //CRIANDO VALOR DA ANIMAÇÃO
        const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
        const [opacity] = useState(new Animated.Value(0));
        const [logo] = useState(new Animated.ValueXY({x:230, y:255}));

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
                    toValue: 155,
                    duration: 300,
                }),
                Animated.timing(logo.y, {
                    toValue: 180,
                    duration: 300,
                }),
            ]).start();
              
        }

        function keyboardDidHide(){
            
            Animated.parallel([
                Animated.timing(logo.x, {
                    toValue: 230,//155,
                    duration: 200,
                }),
                Animated.timing(logo.y, {
                    toValue: 255,//180,
                    duration: 200,
                }),
            ]).start();

        }
        
    return (        

        <KeyboardAvoidingView style={styles.background}>
                
            <View style={styles.containerLogo}> 
            <StatusBar
                barStyle="light-content" //barra para qnd backgroud for escuro
                hidden={false}              //não esconder a barra
                backgroundColor= '#220536'                               
            />
                <Animated.Image 
                style={{
                    width:logo.x,
                    height: logo.y,
                }}
                source={logoImg} />
            </View>

            <Animated.View 
            style={[           //animação de subida
                styles.container,
                {
                    // opacity: opacity,
                    transform: [
                        { translateY: offset.y}
                    ]
                }
                ]}
            >
                
                <TextInput
                style={styles.textinput}
                placeholder="RA, E-mail ou CPF" 
                placeholderTextColor="#675074"
                autoCorrect={false}
                onChangeText={()=> {}}
                />

                <View style={{flexDirection: 'column', width: '90%', paddingHorizontal: 1, marginBottom: 40, paddingTop: 10,}}>
                    <PasswordToggleInput />
                </View>

                {/* <TextInput
                style={styles.textinput}
                secureTextEntry={true}
                placeholder="Senha" 
                placeholderTextColor= "#675074"    //"#453352" //"#5e2b80"
                autoCorrect={false}
                onChangeText={()=> {}}                
                /> */}

                <TouchableOpacity style={styles.btnSubmit} onPress={navigationToEntrar}>
                    <Text style={styles.submitText}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister} onPress={navigationToEsqueciSenha}>
                    <Text style={styles.activyText}>Esqueci minha senha!</Text> 
                </TouchableOpacity>

            </Animated.View>



        </KeyboardAvoidingView>
        
    );
}
