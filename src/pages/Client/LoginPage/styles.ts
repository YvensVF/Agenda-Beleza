import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffdb00',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo:{
        marginTop: '18%',
    },

    logoimg:{
        width: 300,
        height: 70
    },

    login:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },

    input:{
        backgroundColor: '#fff',
        width: '90%',
        height: 45,
        marginBottom: 15,
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
    }


})

export default styles;