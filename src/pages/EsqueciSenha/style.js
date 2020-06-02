import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#220536',
    },
    
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        //marginTop: 30,
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
        color: '#FFF',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        borderBottomColor: '#B51D9E',
        borderBottomWidth: 1,
        fontWeight: 'bold',
    },
    
    btnRedefinir: {
        backgroundColor: '#F0CC25',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 150,
    },

    redefinirText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

})