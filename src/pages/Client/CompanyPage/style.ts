import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffdb00'
    },

    logoView: {
        marginTop: '18%',
    },

    logoImg: {
        width: 300,
        height: 70,
    },

    textBold: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },

    text:{
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 5,
    },

    scView:{
        flex: 1,
        width: '80%',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 5
    },


    picker: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        marginBottom: 3,
    },

    button:{
        width: '80%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#00c41a',
        marginTop: 5,
        marginBottom: 5,
    },

    textButton:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
    }

});

export default styles;