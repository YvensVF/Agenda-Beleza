import { RectButton } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';

import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Keyboard, Alert} from 'react-native';

import styles from './styles';


import logoImg from '../../../assets/images/logo.png';
import api from '../../../services/api';

function LoginPage(){
    const {navigate} = useNavigation();

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    function handleNavigatetoResetPage(){
        navigate('ResetPassPage')
    }

    async function handleSubmitLogin(){
        const response = await api.post('/clients/login', {
            "email": email,
            "pass": pass
        })

        if(response.data.id){
            const id = response.data.id;
            await AsyncStorage.setItem("token", JSON.stringify(id))
            navigate('ClientTabs')
            Keyboard.dismiss();
        }else{
            Alert.alert("Erro", "Usuário ou senha incorretos, verifique os dados e tente novamente.")
        }
    }

    return(
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.logo}>
                <Image source={logoImg} style={styles.logoimg}/>
            </View>


            <View style={styles.login}>

                <TextInput 
                    style = {styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={text=> setEmail(text)}
                />

                <TextInput 
                    style = {styles.input}  
                    placeholder="Senha"
                    secureTextEntry={true}
                    autoCorrect={false}
                    onChangeText={text=> setPass(text)}
                />

                <RectButton style = {styles.btn} onPress={handleSubmitLogin}>
                    <Text style = {styles.btnText}>Acessar</Text>
                </RectButton>

                <View>
                    <TouchableOpacity onPress={handleNavigatetoResetPage}>
                        <Text>Esqueceu a senha? Clique aqui!</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginPage;