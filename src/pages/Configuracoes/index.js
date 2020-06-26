import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();
IconCom.loadFont();
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    TextInput,
    Switch
} from 'react-native';

import FotoStuart from '../../assets/Stuart-Little.jpg';
import styles from './style';

export default function Configuracoes() {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={{ paddingBottom: 150 }}
                // decelerationRate={1}
                showsVerticalScrollIndicator={false}>
                {/* <Text style={styles.textPage}>Configurações ⚙</Text> */}

                <Image source={FotoStuart} style={[styles.imgperfil]} />

                <Text style={styles.labelSeparation}>Dados</Text>

                <Text style={styles.label}>Seu nome</Text>
                <TextInput
                    style={styles.textinputReadOnly}
                    placeholder="Stuart Little"
                    editable={false}
                />

                <Text style={styles.label}>RA</Text>
                <TextInput
                    style={styles.textinputReadOnly}
                    placeholder="2190610-0"
                    editable={false}
                />

                <Text style={styles.label}>Nickname</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder="Sturtizin"
                    placeholderTextColor="#5c5c5c"
                />

                <Text style={styles.labelSeparation}>Notificações</Text>

                <View style={styles.viewNotification}>
                    <View style={styles.divNotifTxt}>
                        <Icon style={[styles.iconsdivMore]} name="notifications" size={28} color="#a7a7a7" />
                        <Text style={styles.labeldivMore}>Receber notificações?</Text>
                    </View>
                    <Switch trackColor={{ false: "#767577", true: "#5e2b80" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}>
                    </Switch>
                </View>

                <Text style={styles.labelSeparation}>Informações</Text>

                <TouchableOpacity style={styles.divMore}>
                    <Icon style={[styles.iconsdivMore]} name="help-outline" size={28} color="#a7a7a7" />
                    <Text style={styles.labeldivMore}>Ajuda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.divMore}>
                    <IconCom style={[styles.iconsdivMore]} name="rocket" size={28} color="#a7a7a7" />
                    <Text style={styles.labeldivMore}>Sugerir uma melhoria</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.divMore}>
                    <IconCom style={[styles.iconsdivMore]} name="file-alert" size={27} color="#a7a7a7" />
                    <Text style={styles.labeldivMore}>Termos de condições</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.divMore}>
                    <IconCom style={[styles.iconsdivMore]} name="shield-lock" size={27} color="#a7a7a7" />
                    <Text style={styles.labeldivMore}>Política de Privacidade</Text>
                </TouchableOpacity>

                <TouchableHighlight style={styles.btnSubmit} underlayColor={'#897a91'} onPress={() => { }}>
                    <Text style={styles.submitText}>LOG OUT</Text>
                </TouchableHighlight>
                <Text style={styles.copyright}>© 2020 UniCEUB - Equipe ePlay</Text>
            </ScrollView>
        </SafeAreaView>
    );
}