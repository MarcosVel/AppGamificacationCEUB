import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';

export default class TableList2 extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	loadUsers = () => {
		
		//https://next.json-generator.com/api/json/get/VJhOnUzpd
		fetch("https://randomuser.me/api/?results=100")
			.then( res => res.json() )
			.then( res => {
				this.setstate ({
					data: res.results || []
				})
			})
	}

	componentDidMount() {
		this.loadUsers();
	}

	  
	  
	render() {
		return (
			<View style={StyleSheet.container}>
			
				<FlatList
					data={this.state.date}
					renderItem={({item}) => (

						<View style={styles.line}>
							<Image
								source={{ uri: item.picture.thumbnail }}
								style={styles.avatar}
							/>
							
							<View style={styles.info}>
								<Text style={styles.email}>{item.email}</Text>
								<Text style={styles.name}>{item.name.first} {item.name.last}</Text>
							</View>
							
						</View>

					)}
					keyExtractor= { item => item.email }
				/>
				
			</View>
		)			
	}

}

const styles = StyleSheet.create({

	container: {
		marginTop: 10,
		marginLeft: 10,
		backgroundColor: '#FFF',
		borderTopWidth: 0,
		borderBottomWidth: 0
	},
	
	logo: {
		width: 100,
		height: 100,
		borderRadius: 100
	},
	
	line: {
		height: 50,
		flexDirection: 'row',
		borderBottomColor: '#CCC',
		borderBottomWidth: 1 
	},

	avatar: {
		width: 40,
		height: 40,
		borderRadius: 50,
		marginRight: 10,
		alignSelf: 'center'
	},
	
	info: {
		flexDirection: "column",
		justifyContent: "flex-start"
	},

	name: {
		fontSize: 12
	},

	email: {
		fontSize: 14,
		fontWeight: 'bold'
	}
})