import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      widthArr:  [  60,    200,     60,     80  ]
    }
  }
  
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
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
        backgroundColor: '#537791',
        borderBottomWidth: 3,
        borderBottomColor: '#F0CC25',        
    },
    text: { 
        textAlign: 'center', 
        fontWeight: '100',
        color: '#8f1cbd',
        fontWeight: 'bold',
    },
    dataWrapper: { 
        marginTop: -1 
    },
    row: { 
        height: 57, 
        backgroundColor: '#F9FAFE' // #F8F9FD //'#E7E6E1' 
    }
    
});