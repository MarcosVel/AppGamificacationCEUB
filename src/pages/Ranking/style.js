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
        //flex: 0.6, 
        backgroundColor: '#220536', 
    },
    box2: { 
        flex: 9, 
        backgroundColor: '#fff', 
    },


});
