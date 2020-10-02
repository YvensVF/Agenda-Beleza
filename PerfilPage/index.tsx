import { ScrollView } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import styles from './styles'

import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import logoImg from '../../../assets/images/logo.png';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

function PerfilPage() {

    const {navigate} = useNavigation();

    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [tel, setTel] = useState('');
    const [date, setDate] = useState('');


    useEffect(() => {
        AsyncStorage.getItem("token")
            .then((response) => {
                const id = response
                api.get(`/clients/${id}`)
                    .then((response) => {
                        const {data} = response;
                        setId(data.id);
                        setName(data.name);
                        setEmail(data.email);
                        setPass(data.pass);
                        setTel(data.telefone);
                        setDate(data.data);
                    })
            })
    }, [])

    async function update(){
        const response = await api.put(`/clients/${id}`, {
            "id": id,
            "name": name,
            "email": email,
            "pass": pass,
            "telefone": tel,
            "data": date
        })

        if(response){
            Alert.alert('Sucesso', "Dados atualizados com sucesso!")
        }else{
            Alert.alert('Erro', "Erro ao atualizar os dados, tente novamente mais tarde!")
        }

    }

    async function exit(){
        await AsyncStorage.removeItem("token");
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
                            <Text style = {styles.nameView}>Nome:</Text>
                            <TextInput
                            style = {styles.pass}
                            value = {name}
                            autoCorrect={false}
                            onChangeText={text=> setName(text)}
                            editable={false}
                            />
                        </KeyboardAvoidingView>

                        <KeyboardAvoidingView style = {styles.inview}>
                            <Text style = {styles.nameView}>Data de Nascimento:</Text>
                            <TextInput
                            style = {styles.pass}
                            value = {date}
                            autoCorrect={false}
                            onChangeText={text=> setDate(text)}
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
                            />
                        </KeyboardAvoidingView>

                        <KeyboardAvoidingView style = {styles.input}>
                            <Text style = {styles.yeahInput}>Senha:</Text>
                            <TextInput
                            style = {styles.pass}
                            value = {pass}
                            editable={true}
                            autoCorrect={false}
                            onChangeText={text=> setPass(text)}
                            />
                        </KeyboardAvoidingView>

                        <KeyboardAvoidingView style = {styles.input}>
                            <Text style = {styles.yeahInput}>Numero:</Text>
                            <TextInput
                            style = {styles.pass}
                            value = {tel}
                            editable={true}
                            autoCorrect={false}
                            onChangeText={text=> setTel(text)}
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

export default PerfilPage