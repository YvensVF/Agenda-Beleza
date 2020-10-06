import { RectButton } from 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Logo from '../../../assets/images/logo.png';
function LandingPage(){
    const {navigate} = useNavigation();

    function handleNavigateToRegister(){
        navigate('RegisterPage');
    }

    function handleNavigateToLogin(){
        navigate('LoginPage');
    }

    function handleNavigatetoLandingCompany(){
        navigate('LandingCompany')
    }

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.imageLogo} source={Logo}/>
                <Text>Sua nova forma de ser atendido com segurança!</Text> 
            </View>

            <View style={styles.userArea}>
                <RectButton style={styles.button} onPress={handleNavigateToLogin}>
                    <Text style={styles.buttonText}>Logar</Text>
                </RectButton>

                <RectButton style={styles.button} onPress={handleNavigateToRegister}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </RectButton>

                <View>
                    <TouchableOpacity onPress={handleNavigatetoLandingCompany}>
                        <Text>Você possui um salão? Clique aqui!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default LandingPage;