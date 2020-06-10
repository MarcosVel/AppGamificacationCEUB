import React from 'react';
import {
    Text,
    View,
    FlatList,
    Image,
    StyleSheet,

} from 'react-native';

export default class RankingList2 extends React.Component {
    constructor() {
        super()
        this.state = {
            dataSource: []
        }
    }

    renderItem = ({ item }) => {
        return (
            <View>
                <Image style={styles.imgUsuRank}
                    source={{ uri: item.image }}
                />          
                <View>
                    <Text>  
                        {item.name}
                    </Text>
                    <Text> 
                        {item.position}
                    </Text>
                </View>
            </View>
        )
    }

    componentDidMount() {
        const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.ranking_array
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    textPage: {
        fontSize: 30,
        color: '#220536',
        textAlign: 'center'
    },

    imgUsuRank: {
        width: 100,
        height: 100,
    },

});
