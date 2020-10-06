import {RectButton} from 'react-native-gesture-handler';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Text, View, Image } from 'react-native';

import Logo from '../../../assets/images/logo.png';
import styles from './styles';

function LandingPageCompany(){

    const { navigate } = useNavigation();

    function handleNavigateToLoginCompany(){
        navigate('LoginCompany');
    }

    function handleNavigateToRegisterCompany(){
        navigate('RegisterCompany');
    }

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.imageLogo} source={Logo}/>
                <Text>A sua nova forma de atender clientes com segurança!</Text> 
            </View>

            <View style={styles.userArea}>
                <RectButton style={styles.button} onPress={handleNavigateToLoginCompany}>
                    <Text style={styles.buttonText}>Logar</Text>
                </RectButton>

                <RectButton style={styles.button} onPress={handleNavigateToRegisterCompany}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </RectButton>
            </View>
        </View>
    )
}

export default LandingPageCompany;