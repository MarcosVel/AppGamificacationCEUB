import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { 
    View, 
    TouchableOpacity, 
    Text,
    Linking,
    FlatList
} from 'react-native';

import styles from './style';

export default function Noticia() {
    const navigation = useNavigation();

    function navigationToNews() {     //função para navegação para navegar entre as páginas (declarado lá no botão entrar);
        Linking.openURL(`https://www.uniceub.br/noticias/noticias-comunicado-oficial-novo-calendario-letivo-provisorio-2020`);
    }

    return(
        <View style={styles.container}>
            {/* <StatusBar
                barStyle="dark-content" //barra para qnd backgroud for escuro
                hidden={false}              //não esconder a barra
                backgroundColor= '#F2F2F2'                               
            /> */}
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos.</Text>
                </Text>
            </View>

            <Text style={styles.title}>Notícias!</Text>
            <Text style={styles.description}>Fique por dentro das últimas notícias do UniCEUB.</Text>

            <FlatList 
                style={styles.incidentList}
                data={[1, 2, 3, 4, 5]}
                keyExtractor={incident => String(incident) }
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>NOTICIA:</Text>
                        <Text style={styles.incidentValue}>Covid-19</Text>

                        <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                        <Text style={styles.incidentValue}>Casos confirmados de COVID-19 no UniCEUB = 0</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={navigationToNews}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#B51D9E" />
                        </TouchableOpacity>
                    </View> 
                )}                    
            />
        </View>
    );

}

        
    
