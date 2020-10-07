import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native'

import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Alert, Keyboard} from 'react-native';

import styles from './styles';


import logoImg from '../../../assets/images/logo.png'
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

function LoginCompany(){
    const {navigate} = useNavigation();

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    async function login(){
        const response = await api.post('/company/login', {
            "email": email,
            "pass": pass
        })
        
        const id = response.data.id;
        if(response.data.id){
            await AsyncStorage.setItem("token_company", JSON.stringify(id))
            navigate("CompanyTabs")
            Keyboard.dismiss();
        }else{
            Alert.alert("Error", "Email ou senha incorretos.")
        }
    }

    function handleNavigatetoResetPage(){
        navigate('ResetPassPage')
    }

    return(
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.logo}>
                <Image source={logoImg} style={styles.logoimg}/>
                <Text style={styles.text}>Entre para ter acesso a informações sobre seu salão!</Text>
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

                <TouchableOpacity style = {styles.btn} onPress={login}>
                    <Text style = {styles.btnText}>Acessar</Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity onPress={handleNavigatetoResetPage}>
                        <Text>Esqueceu a senha? Clique aqui!</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginCompany;