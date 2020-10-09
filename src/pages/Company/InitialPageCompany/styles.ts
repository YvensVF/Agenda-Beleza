import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffdb00',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoView:{
        marginBottom: '18%'
    },

    logoImg:{
        width: 300,
        height: 70
    },

    txtLogo:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },

    pickerView:{
        textAlign: 'center',
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#000'  
    },

    inputTxt:{
        backgroundColor: '#fff',
        marginTop: 10,
        width: '80%',
        height: 45,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#000',
        textAlign: 'center',
        
    },

    btn:{
        backgroundColor: '#00c41a',
        width: '40%',
        borderRadius: 7,
        padding: 10,
        marginTop: 10
    },

    btnTxt:{
        textAlign: 'center',
        color: '#fff'
    }

})

export default styles;
