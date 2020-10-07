import { ScrollView } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import styles from './styles'

import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import logoImg from '../../../assets/images/logo.png';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

function PerfilPageCompany() {

    const {navigate} = useNavigation();

    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTel] = useState('');
    const [endereco, setEnd] = useState('');
    const [pass, setPass] = useState('');


    useEffect(() => {
        load();
    }, [])

    async function load(){
        const id = await AsyncStorage.getItem("token_company");
        const response = await api.get(`/company/${id}`)
        const {data} = response;
        setId(data.id);
        setName(data.name);
        setEmail(data.email);
        setCnpj(data.cnpj);
        setTel(data.tel);
        setEnd(data.endereco);
        setPass(data.pass);
    }

    async function update(){
        const response = await api.put(`/company/${id}`, {
            "id": id,
            "name": name,
            "email": email,
            "cnpj": cnpj,
            "tel": telefone,
            "endereco": endereco,
            "pass": pass
        })

        if(response){
            Alert.alert('Sucesso', "Dados atualizados com sucesso!")
        }else{
            Alert.alert('Erro', "Erro ao atualizar os dados, tente novamente mais tarde!")
        }

    }

    async function exit(){
        await AsyncStorage.removeItem("token_company");
        navigate("LandingPage")
    }

    return (
        <KeyboardAvoidingView style={styles.container}>

            <View style = {styles.logo}> 
                <Image style = {styles.imageLogo} source={logoImg}/>
                <Text style = {styles.logoPerfil}>Perfil</Text>
            </View>

            <ScrollView style={styles.perfil}>

                        <KeyboardAvoidingView style = {styles.inview}>
                            <Text style = {styles.nameView}>Nome do Salão:</Text>
                            <TextInput
                            style = {styles.pass}
                            value = {name}
                            autoCorrect={false}
                            onChangeText={text=> setName(text)}
                            editable={false}
                            />
                        </KeyboardAvoidingView>


                        <KeyboardAvoidingView style = {styles.inview}>
                            <Text style = {styles.nameView}>CNPJ:</Text>
                            <TextInput
                            style = {styles.pass}
                            value = {cnpj}
                            autoCorrect={false}
                            onChangeText={text=> setCnpj(text)}
                            editable={false}
                            />
                        </KeyboardAvoidingView>

                        <KeyboardAvoidingView style = {styles.inview}>
                            <Text style = {styles.nameView}>Email:</Text>
                            <TextInput
                            style = {styles.pass}
                            value = {email}
                            autoCorrect={false}
                            onChangeText={text=> setEmail(text)}
                            editable={true}
                            />
                        </KeyboardAvoidingView>

                        <KeyboardAvoidingView style = {styles.input}>
                            <Text style = {styles.yeahInput}>Telefone:</Text>
                            <TextInput
                            style = {styles.pass}
                            value = {telefone}
                            editable={true}
                            autoCorrect={false}
                            onChangeText={text=> setTel(text)}
                            />
                        </KeyboardAvoidingView>

                        <KeyboardAvoidingView style = {styles.input}>
                            <Text style = {styles.yeahInput}>Endereço:</Text>
                            <TextInput
                            style = {styles.pass}
                            value = {endereco}
                            editable={true}
                            autoCorrect={false}
                            onChangeText={text=> setEnd(text)}
                            />
                        </KeyboardAvoidingView>

                        <KeyboardAvoidingView style = {styles.input}>
                            <Text style = {styles.yeahInput}>Senha:</Text>
                            <TextInput
                            style = {styles.pass}
                            value = {pass}
                            secureTextEntry={true}
                            editable={true}
                            autoCorrect={false}
                            onChangeText={text=> setPass(text)}
                            />
                        </KeyboardAvoidingView>

                        <TouchableOpacity style = {styles.btn} onPress={update}>
                            <Text style = {styles.btnTextConfirm}>Confirmar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.btn} onPress={exit}>
                            <Text style = {styles.btnText}>Deslogar</Text>
                        </TouchableOpacity>
            </ScrollView>
        
    </KeyboardAvoidingView>
)
}

export default PerfilPageCompany;