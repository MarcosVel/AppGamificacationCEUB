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
        flex: 1,    
        //height: boxHeight
    },
    //header 
    box1: { 
        height: '25%', 
        backgroundColor: '#220536', 
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#F0CC25',
    },        

    //content 
    // box2: { 
    //     flex: 9, 
    //     backgroundColor: '#FFF',
    // },

    boxConquitas: {
        height: '75%',
        paddingHorizontal: 24,            
    },



    //CRIADO POR NÓS
    headericons: {
        flexDirection: 'row',
        justifyContent: 'space-between',          
        marginLeft: '0.5%',
        marginRight: '0.5%', 
        marginTop: -5,
        
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
        marginTop: '3%',
        marginLeft: 25,
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
        marginLeft: 16,
    },   
    cursoProfile: {
        fontSize: 15,
        fontFamily: 'Roboto',
        color: '#737380',
        //textAlign: 'right',
        marginLeft: 16,
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
        paddingTop: 25,
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