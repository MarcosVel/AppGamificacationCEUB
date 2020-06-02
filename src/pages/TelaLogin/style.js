import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#220536', //#330066
    },
    
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 30,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 15,
        marginTop: -40,
    },

    textinput: {
        width: '90%',
        marginBottom: 20,
        color: '#fff',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        borderBottomColor: '#B51D9E',
        borderBottomWidth: 1,
        fontWeight: 'bold',
        
    },
    
    btnSubmit: {
        backgroundColor: '#F0CC25', //yellow
        width: '87%',        
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 20,        
    },

    submitText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    btnRegister: {
        marginTop: 10,
    },

    activyText: {
        flexDirection: 'row',
        justifyContent: "space-between",
        color: '#B51D9E',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    }
})