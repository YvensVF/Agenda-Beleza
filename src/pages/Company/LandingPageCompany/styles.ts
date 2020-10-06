import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffdb00',
    }, 

    logo:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },

    imageLogo:{
        width: 300,
        height: 70
    },

    userArea: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },

    button:{
        backgroundColor: '#000000',
        width: '90%',
        height: 45,
        borderRadius: 7,
        marginBottom: 15,
        fontSize: 17,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText:{
        color: '#ffffff'
    }
})

export default styles;