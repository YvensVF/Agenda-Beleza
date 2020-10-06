import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffdb00',
        alignItems: 'center',

    },

    firstText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 35,
    },

    Registrar: {
        marginTop: 20,
        flex:1,
        width: '90%',
        alignItems: 'center'
    },

    text:{
        textAlign:'center',
    },

    input:{
        backgroundColor: '#fff',
        width:'90%',
        height: 45,
        marginBottom:15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
    },

    btn:{
        backgroundColor: '#000000',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,

    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },

    logo: {
        marginTop: '50%',
        alignItems: 'center',
    },

    
    imageLogo: {
        width: 200,
        height: 45,
    },

    supportText: {
        textAlign: 'center',
        fontSize: 15,
    },

    logoSalao: {
        alignItems: 'center',
    },

    imageSalao: {
        width: 50,
        height: 60,
        marginBottom: 10,
        marginTop: 50
    },


})

export default styles