import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import { KeyboardAvoidingView, View, Image, Text, Picker, ScrollView, Alert } from 'react-native';
import { RectButton, TextInput} from 'react-native-gesture-handler';
import logoImg from '../../../assets/images/logo.png';
import styles from './styles';

import api from '../../../services/api';

function InitialPageCompany(){

    type FreeHour = {
        id_hours: number,
        id_company: number,
        from_hour: string,
        to_hour: string,
        week_day: number,
    }

    const [weekday, setWeekDay] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    async function registerHour(){
        const id = await AsyncStorage.getItem("token_company")

        const response = await api.post('/freehours', {
            "id_company": id,
            "from_hour": from,
            "to_hour": to,
            "week_day": weekday
        })

        if(response){
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!")
        }else{
            Alert.alert("Erro", "Erro ao cadastrar o horário, verifique os dados e tente novamente")
        }
    }

    return(
        <View style={styles.container}>
            
                <KeyboardAvoidingView style={styles.logo}>
                    <Image style = {styles.imageLogo} source={logoImg}/>
                    <Text style = {styles.logoPerfil}>Cadastro de Horário</Text>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={styles.boxText}>
                    <Picker onValueChange={(t) => {setWeekDay(t)}}>
                        <Picker.Item label={"Dia da Semana"} value={""}/>
                        <Picker.Item label={"Domingo"} value={0}/>
                        <Picker.Item label={"Segunda-feira"} value={1}/>
                        <Picker.Item label={"Terça-feira"} value={2}/>
                        <Picker.Item label={"Quarta-feira"} value={3}/>
                        <Picker.Item label={"Quinta-feira"} value={4}/>
                        <Picker.Item label={"Sexta-feira"} value={5}/>
                        <Picker.Item label={"Sabado"} value={6}/>
                    </Picker>
                </KeyboardAvoidingView>
        
                <KeyboardAvoidingView style={styles.boxTextSecondary}>
                    <TextInput 
                        style = {styles.input}
                        placeholder="Horário inicial"
                        maxLength = {5}
                        autoCorrect={false}
                        onChangeText={t => {setFrom(t)}}
                    />

                    <TextInput 
                        style = {styles.input}
                        placeholder="Horário final"
                        maxLength = {5}
                        autoCorrect={false}
                        onChangeText={t => {setTo(t)}}
                    />
                </KeyboardAvoidingView>

                <RectButton style={styles.btn} onPress={registerHour}>
                    <Text style={styles.btnText}>Confirmar</Text>
                </RectButton>

        </View>
    );
}

export default InitialPageCompany;