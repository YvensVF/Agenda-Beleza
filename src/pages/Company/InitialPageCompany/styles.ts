import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffdb00',
        alignItems: 'center',
    },
    logo:{
        marginTop: '10%'
    },
    imageLogo:{
        width: 300,
        height: 70,
    },
    logoPerfil:{
        textAlign: 'center'
    },
    boxText:{
        backgroundColor: '#fff',
        width: '80%',
        height: '5%',
        marginTop: 30,
    },
    boxTextSecondary:{
        backgroundColor: '#fff',
        marginTop: 20,
        width: '80%',
        height: '5%',
    },
    input:{
        backgroundColor: '#fff',
        color: '#222',
        fontSize: 17,
        marginTop: 10
    },
    btn:{
        backgroundColor: '#00c41a',
        marginTop: 50,
        borderRadius: 5,
        width: '50%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText:{
        color: '#fff'
    },
    hours:{
        flex: 1,
        width: '80%',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 5,
        borderColor: '#000'
    },
})

export default styles;