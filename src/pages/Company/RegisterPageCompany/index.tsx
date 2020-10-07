import React, {useState} from 'react'

import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView,Image, Alert, } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../../assets/images/logo.png'
import salaoImage from '../../../assets/images/salaoImageLittle.png'
import api from '../../../services/api';
import styles from './styles';

function RegisterPageCompany(){

    const {navigate} = useNavigation();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [tel, setTel] = useState('')
    const [endereco, setEnd] = useState('')
    const [pass, setPass] = useState('')

    async function register(){
        const response = await api.post('/company', {
            "name": name,
            "email": email,
            "cnpj": cnpj,
            "tel": tel,
            "endereco": endereco,
            "pass": pass
        })

        if(response.data.id){
            Alert.alert("Sucesso", "Salão registrado com sucesso!")
            navigate("LoginCompany")
        }else{
            Alert.alert("Erro", "Erro ao registrar, verifique os dados e tente novamente")
        }
    }
    
    return(
        <KeyboardAvoidingView style={styles.container}>

            <Text style = {styles.firstText}>Cadastre seu Salão</Text>

            <View style={styles.Registrar}>
                <TextInput
                    style = {styles.input}
                    placeholder = "Nome do Salão"
                    autoCorrect={false}
                    onChangeText={text=>setName(text)}
                />

                <TextInput
                    style = {styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={text=>setEmail(text)}
                />

                <TextInput
                    style = {styles.input}
                    placeholder = "CNPJ"
                    autoCorrect={false}
                    onChangeText={text=>setCnpj(text)}
                />

                <TextInput
                    style = {styles.input}
                    placeholder = "Telefone"
                    autoCorrect={false}
                    onChangeText={text=>setTel(text)}
                />

                <TextInput 
                    style = {styles.input}
                    placeholder = "Endereço"
                    autoCorrect={false}
                    onChangeText={text=>setEnd(text)}
                />

                <TextInput 
                    style = {styles.input}
                    placeholder = "Senha"
                    secureTextEntry={true}
                    autoCorrect={false}
                    onChangeText={text=>setPass(text)}
                />

                <TouchableOpacity style = {styles.btn} onPress={register}>
                    <Text style = {styles.btnText}>Cadastrar</Text>
                </TouchableOpacity>

                <View style = {styles.logo}> 
                    <Image style = {styles.imageLogo} source={Logo}/>
                    <Text style = {styles.supportText}>Para caso de duvidas: agendabeleza@gmail.com</Text>
                </View>

                <View style = {styles.logoSalao}> 
                    <Image style = {styles.imageSalao} source={salaoImage}/>
                </View>

            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterPageCompany;