import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); 
const boxCount = 2; 
//const boxHeight = height / boxCount;

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    // box: {
    //     flex: 2.9,
    //     height: boxHeight
    // },
    //header 
    box1: { 
        flex: 0.6, 
        backgroundColor: '#220536', 
    },
    box2: { 
        flex: 9, 
        backgroundColor: '#fff', 
    },

    //CRIADO POR NÓS
    headericons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,  
        marginLeft: 1,
        marginRight: 1, 
    },
    headerleft: {
        flexDirection: 'row',         
        marginLeft: 5,
    },

    headerright: {
        flexDirection: 'row',         
        marginRight: 5,
    },

    //icon bars
    menu: {            
        marginLeft: 12,
        marginTop: 0,     
    },

    //icon perfil
    account: {       
        marginLeft: 15,
        marginTop: 4,     
    },

    //icon engrenagem
    settings: {       
        marginRight: 13,
        marginTop: 2.2,     
    },

    //escrito Ranking
    profile: {
        fontSize: 25,
        fontFamily: 'Roboto',
        color: '#856894', //'#675074',            
        marginLeft: 10,
        marginTop: 0.9,
    },

    effecticons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },



    //parte do Ranking

});
