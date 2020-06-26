import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';


export default class TableList4 extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         ranking_array: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
   }

   renderTableData() {
        return this.state.ranking_array.map((ranking, index) => {
            const { id, name, age, email } = ranking //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }


    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
        
            <View style={styles.container}>
                
                <View style={styles.filtrosHeader}>
                    <TouchableOpacity style={styles.effecticons}>
                        <Text style={styles.textHeader}>Mês</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.effecticons}>
                        <Text style={styles.textHeader}>Semestre</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.effecticons}>
                        <Text style={styles.textHeader}>Outro</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.effecticons}>
                        <Text style={styles.textHeader}>Filtrar</Text> 
                    </TouchableOpacity>
                </View>


                
                
                
                
                {/* <div>
                    <table id='ranking_array'>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div> */}


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
})