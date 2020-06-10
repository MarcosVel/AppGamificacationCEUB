import React from 'react';
import { FlatList, StyleSheet, Text, Image ,View, SafeAreaView } from 'react-native';


export default class RankingList extends React.Component {
    state = {
        data: [
            { id: "01", name: "Stuart Little", pontos:"13300" },
            { id: "02", name: "Relâmpago Marquinhos", pontos:"12300" },
            { id: "03", name: "Buzz Latinha", pontos:"11300" },
            { id: "04", name: "Miky Mousse", pontos:"10300" },
            { id: "05", name: "Zangado", pontos:"1300" }
        ]
    };
    
    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    //numColumns={4}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.listaRanking}>
                                <View style={styles.listaRankingView2}>
                                    <Text style={styles.text}>{item.name}</Text>
                                </View>
                                <View style={styles.pontos}>
                                    <Text style={styles.textPontos}>{item.pontos}</Text>
                                </View>
                            </View>
                        );
                    }}
                />
            </SafeAreaView> 
        );
    } 
}

const styles = StyleSheet.create({
    listaRanking: {
        //width: '20%',
        flexDirection: 'row',
        //flex: 1,
        borderColor: '#000',
        borderBottomWidth: 1,
        alignItems: "center",
        paddingVertical: 19,
        //backgroundColor: '#D9D9D9',
        //flexGrow: 1,
        //margin: 4,
        //padding: 20
    },

    listaRankingView2: {
        flexDirection: 'column',
    },

    text: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 15,
        paddingLeft: 25,

    },
    
    textPontos: {
        color: "#000",
        fontSize: 15,
        //paddingLeft: 25,

    },

    pontos: {
        flexDirection: 'column',
        //paddingLeft: 25,
    }

    

});

  