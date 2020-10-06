import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ffdb00',
    },
    logo:{
        marginTop: '18%',
    },
    logoImage:{
        width: 300,
        height: 70
    },
    textCenter:{
        textAlign: 'center',
        fontSize: 23,
        marginBottom: 10
    },
    sview:{
        flex: 1,
        width: '80%',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 5
    },
    saloes:{
        backgroundColor: '#000',
        width: '90%',
        borderRadius: 7,
        marginTop: 15,
        padding: '5%', 
        marginLeft: 13   
    },
    saloonTitle: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default styles;