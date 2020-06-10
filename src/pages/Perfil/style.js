import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); 
//const boxCount = 2; 
//const boxHeight = height / boxCount;

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    box: {
        flex: 2.9,
        //height: boxHeight
    },
    //header 
    box1: { 
        flex: 1, 
        backgroundColor: '#220536', 
    },        

    //content 
    box2: { 
        flex: 9, 
        backgroundColor: '#FFF',
    },

    boxConquitas: {
        paddingHorizontal: 24,            
    },



    //CRIADO POR NÓS
    headericons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,  
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

    //escrito Perfil
    profile: {
        fontSize: 25,
        fontFamily: 'Roboto',
        color: '#856894',          
        marginLeft: 10,
        marginTop: 0.9,
    },   

    viewProfile: {        
        flexDirection: 'row',
        marginTop: 17,
        marginLeft: 20,
    },

    descProfile: {      
        flex: 1,  
        flexDirection: 'column',   
        marginTop: 3,    
    },
    
    nameProfile: {
        fontSize: 25,
        fontFamily: 'Roboto',
        color: '#fff',
        //textAlign: 'right',
        marginLeft: 15,
    },   
    cursoProfile: {
        fontSize: 15,
        fontFamily: 'Roboto',
        color: '#737380',
        //textAlign: 'right',
        marginLeft: 15,
    }, 

    imgperfil: {
        width: 120,
        height: 120,
        //flexDirection: 'row',
        alignSelf: 'flex-start',
        //marginLeft: 20,
        //margin: 'auto',
        //resizeMode: "contain",
        //alignSelf: 'center',    
        borderWidth: 1,
        borderRadius: 60,           
        //overflow: "hidden",
        borderWidth: 2,
        borderColor: "#F0CC25"
     },
    
    effecticons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textin: {
        fontSize: 25,
        fontFamily: 'Roboto',
        color: 'black',
    },
    
    //ESTILO FLATLIST
    incidentList: {            
        paddingTop: 30,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,            
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#B51D9E', //'#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    }

})