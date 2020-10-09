import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffdb00',
        alignItems: 'center',
        justifyContent: 'center',
    },

    firstText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 50,
    },
    
    title: {
        color:'#fff',
        fontSize: 20,
    },

    Registrar: {
        flex:1,
        marginTop: 30,
        width: '90%',
    },

    allInput:{
        alignItems:"center"
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
        marginTop: '6%',
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
        width: 60,
        height: 75,
        marginTop: 45
    },
})
export default styles