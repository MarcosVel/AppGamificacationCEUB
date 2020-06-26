import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },

    scrollView: {        
        width: '100%',
        paddingTop: 40,
        
      },
    
    textPage: {
        fontSize: 30,
        color: '#220536',
        textAlign: 'center'
    },

    imgperfil: {
        width: 120,
        height: 120,        
        alignSelf: 'flex-start',        
        //resizeMode: "contain",
        alignSelf: 'center',    
        borderWidth: 1,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#F0CC25",
        marginBottom: 20
     },

     label: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#a7a7a7",
     },

     labelSeparation: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#a7a7a7",
        paddingBottom: 10,
        borderBottomColor: "#F0CC25",
        borderBottomWidth: 1,
        marginTop: 15,
        marginBottom: 20
      },      
     
     textinputReadOnly: {        
        marginTop: 10,
        marginBottom: 20,        
        fontSize: 17,
        borderRadius: 15,
        padding: 10,
        borderColor: '#5e2b80',
        borderWidth: 2,        
        backgroundColor: "#e6e6e6",
    },

    textinput: {        
        marginTop: 10,
        marginBottom: 20,        
        fontSize: 17,
        borderRadius: 15,
        padding: 10,
        borderColor: '#5e2b80',
        borderWidth: 2,        
        backgroundColor: "#f2f2f2",
        
    },

    divMore: {
        flexDirection: 'row',
        alignItems: "center",             
        paddingBottom: 25
    },

    iconsdivMore: {
        marginRight: 10,
    },

    labeldivMore: {
        fontSize: 17,        
        color: "#a7a7a7",
      },



    btnSubmit: {
        backgroundColor: '#f2f2f2', //yellow
        width: '100%',        
        height: 49,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        borderColor: '#5e2b80',
        borderWidth: 2.5,
        marginTop: 30,
        marginBottom: 20,    
        
    },
    submitText: {
        color: '#5e2b80', /*'#5e2b80',*/
        fontWeight: "bold",
        fontSize: 17,
    },

    copyright: {
        fontSize: 13,
        color: '#b2b2b2',
        textAlign: 'center'
    },

    divNotifTxt: {
        flexDirection: 'row',
        alignItems: "center",        
    },

    viewNotification: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 25
    },

});
