import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
 
export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //tableHead: ['Semestre', 'Mês', 'Semana', 'Filtrar'],
      widthArr:  [  80,    160,     80,     100  ],
      tableData: [
        ['Imagem', 'Lucas Rodrigues', '100.000pts', '1'],
        ['Imagem', 'Marcos Veloso', '90.000pts', '2'],
        ['Imagem', 'Íris Calheiros', '80.000pts', '3'],
        ['Imagem', 'Bruna Mariano', '70.000pts', '4'],
        ['Imagem', 'Agnes Gru', '60.000pts', '5'],
        ['Imagem', 'Relâmpago Marquinhos', '50.000pts', '6'],
        ['Imagem', 'Steve Minion', '40.000pts', '7'],
        ['Imagem', 'Bob Minion', '30.000pts', '8'],
        ['Imagem', 'Fortrek Mechanical', '20.000pts', '9'],
        ['Imagem', 'HyperX Corporation', '10.000pts', '10'],
        ['Imagem', 'HyperX Corporation', '5.000pts', '11'],
        ['Imagem', 'HyperX Corporation', '4.000pts', '12'],
        ['Imagem', 'HyperX Corporation', '3.000pts', '13'],
        ['Imagem', 'HyperX Corporation', '2.000pts', '14'],
        ['Imagem', 'HyperX Corporation', '1.000pts', '15'],
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
        <View style={styles.container}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={styles.table}> 
                    <Table borderStyle={{border: 'none'}}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                        <Rows data={state.tableData} textStyle={styles.text}/>
                    </Table>
                </View>
            </ScrollView>
        </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { 
      flex: 1, 
      //padding: 16, 
      //paddingTop: 30, 
      backgroundColor: '#fff' 
    },

  head: { 
        height: 40, 
        backgroundColor: '#f1f8ff',
        borderBottomWidth: 1,
        borderBottomColor: '#F0CC25'
    },

  text: { 
        textAlign: 'center', 
        fontWeight: '100',
        color: '#856894',
        fontWeight: 'bold',
    },

    table: {
        borderBottomWidth: 1,
        borderBottomColor: '#F0CC25'
    }
});