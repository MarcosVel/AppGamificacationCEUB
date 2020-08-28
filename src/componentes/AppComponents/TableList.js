import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, ImageStore } from 'react-native';
import { Table, TableWrapper, Row, Col, Rows } from 'react-native-table-component';

import Image from '../../assets/Stuart-Little.jpg';

export default class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //tableHead: ['Semestre', 'Mês', 'Semana', 'Filtrar'],
            widthArr:  [  80,    160,     80,     100  ], //Head4 - widthArr 60
            data: [
                // ['Imagem', 'Lucas Rodrigues', '100.000pts', '1'],
                // ['Imagem', 'Marcos Veloso', '90.000pts', '2'],
                // ['Imagem', 'Íris Calheiros', '80.000pts', '3'],
                // ['Imagem', 'Bruna Mariano', '70.000pts', '4'],
                // ['Imagem', 'Agnes Gru', '60.000pts', '5'],
                // ['Imagem', 'Relâmpago Marquinhos', '50.000pts', '6'],
                // ['Imagem', 'Steve Minion', '40.000pts', '7'],
                // ['Imagem', 'Bob Minion', '30.000pts', '8'],
                // ['Imagem', 'Fortrek Mechanical', '20.000pts', '9'],
                // ['Imagem', 'HyperX Corporation', '10.000pts', '10'],
                // ['Imagem', 'HyperX Corporation', '5.000pts', '11'],
                // ['Imagem', 'HyperX Corporation', '4.000pts', '12'],
                // ['Imagem', 'HyperX Corporation', '3.000pts', '13'],
                // ['Imagem', 'HyperX Corporation', '2.000pts', '14'],
                // ['Imagem', 'HyperX Corporation', '1.000pts', '15'],
            ]
        }
    }

    // Tabela com conexão com API
    // loadUsers = () => {
		
	// 	//https://next.json-generator.com/api/json/get/VJhOnUzpd
	// 	fetch("https://next.json-generator.com/api/json/get/VJhOnUzpd")
    //         .then( res => res.json() )
    //         //.then(res => console.log(res))
	// 		.then( res => {
	// 			this.setstate ({
	// 				data: res.ranking_array || []
	// 			})
	// 		})
    // }
    
    // componentDidMount() {
	// 	this.loadUsers();
	// }
  
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 1; i <= 15; i += 1) {
        const rowData = [
            ('Img'),
            ('Stuart Little'),
            ('10000pts'),
            //(1)
        ];
        for (let j = 1; j < 10; j += 1) {  
        rowData.push(`${i}`);
        //rowData.push(`${tableData}`);
        }
        tableData.push(rowData);
    }
    

    return (
        <View style={styles.container}>
            {/* Header para filtragem (onPress para filtrar o ranking) */}
            <View style={styles.filtrosHeader}>
                <TouchableOpacity style={styles.effecticons}>
                    <Text style={styles.textHeader}>Mês</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.effecticons}>
                    <Text style={styles.textHeader}>Semestre</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.effecticons}>
                    <Text style={styles.textHeader}>Semana</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.effecticons}>
                    <Text style={styles.textHeader}>Global</Text> 
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <View>
                    {/* <Table borderStyle={{borderWidth: 1}}>
                        <Row 
                        data={state.data} 
                        flexArr={[1, 2, 1, 1]} 
                        style={styles.head} 
                        textStyle={styles.text}
                        />
                        <TableWrapper style={styles.wrapper}>
                            <Col data={'Position'} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
                            <Rows data={name.first} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
                        </TableWrapper>
                    </Table> */}

                    {/* <Table borderStyle={{borderColor: '#C1C0B9'}}>
                        <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                    </Table> */}
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{borderColor: '#C1C0B9'}}>
                        {
                            tableData.map((rowData, index) => (
                            <Row
                                key={index}
                                data={ rowData }//state.data
                                widthArr={ state.widthArr }
                                style={[styles.row, index%2 && {backgroundColor: '#fff'}]} //'#F7F6E7' #e9e1ed
                                textStyle={styles.text}
                            />
                            ))
                        } 
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    
    container: { 
        flex: 1, 
        //padding: 1, 
        //paddingTop: 30, 
        backgroundColor: '#fff' 
    },

    header: { 
        height: 50, 
        backgroundColor: '#220536',
        borderBottomWidth: 3,
        borderBottomColor: '#F0CC25',
        //borderTopColor: '#F0CC25'
    },

    text: { 
        textAlign: 'center', 
        fontWeight: '100',
        color: '#856894',
        fontWeight: 'bold',
    },

    dataWrapper: { 
        marginTop: -1 
    },

    row: { 
        height: 57, 
        backgroundColor: '#F9FAFE' // #F8F9FD //'#E7E6E1' //#F9FAFE 
    },

    filtrosHeader: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#220536',
        borderBottomColor: '#F0CC25',
        borderBottomWidth: 3,
        padding: 10,
        
    },

    textHeader: {
        color: '#856894',
        fontSize: 20,  
    }
    
});