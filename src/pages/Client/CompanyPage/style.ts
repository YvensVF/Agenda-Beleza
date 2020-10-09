import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffdb00',
    },

    allInput: {
        alignItems: 'center'
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
        width: '95%',
        marginTop: '18%',
        marginBottom: 50,
    },

    pickerView: {
        textAlign: 'center',
        borderWidth: 5,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderRadius: 10,
        marginTop: 10
    },

    viewImageSalao:{
        alignItems: 'center',
    },

    imageSalao: {
        width: 60,
        height: 70,
        marginBottom: 20,
        marginTop: 50,
    },

    button:{
        width: '80%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#00c41a',
        marginBottom: 5,
    },

    textButton:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
    }

});

export default styles;