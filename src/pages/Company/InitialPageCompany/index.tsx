import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import { KeyboardAvoidingView, View, Image, Text, Picker, Alert, Keyboard } from 'react-native';
import { RectButton, TextInput} from 'react-native-gesture-handler';
import logoImg from '../../../assets/images/logo.png';
import styles from './styles';

import api from '../../../services/api';

function InitialPageCompany(){
    const [weekday, setWeekDay] = useState("")
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
            Keyboard.dismiss();
        }else{  
            Alert.alert("Erro", "Erro ao cadastrar o horário, verifique os dados e tente novamente")
        }
    }

    return(
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.logoView}>
                <Image style={styles.logoImg} source={logoImg}/>
                <Text style={styles.txtLogo}>Cadastro de Horário</Text>
            </View>

            <View style={styles.pickerView}>
                 <Picker selectedValue={weekday}  onValueChange={(t) => {setWeekDay(t)}}>
                    <Picker.Item label={"Dia da Semana"} value={""}/>
                    <Picker.Item label={"Domingo"} value={1}/>
                    <Picker.Item label={"Segunda-feira"} value={2}/>
                    <Picker.Item label={"Terça-feira"} value={3}/>
                    <Picker.Item label={"Quarta-feira"} value={4}/>
                    <Picker.Item label={"Quinta-feira"} value={5}/>
                    <Picker.Item label={"Sexta-feira"} value={6}/>
                    <Picker.Item label={"Sabado"} value={7}/>
                </Picker>

            </View>

            <TextInput 
                style={styles.inputTxt} 
                placeholder="Horário inicio"
                maxLength={5}
                autoCorrect={false}
                onChangeText={t => {setFrom(t)}}
            />

            <TextInput 
                style={styles.inputTxt} 
                placeholder="Horário final"
                maxLength={5}
                autoCorrect={false}
                onChangeText={t => {setTo(t)}}
            />

            <RectButton style={styles.btn} onPress={registerHour}>
                <Text style={styles.btnTxt}>Confirmar</Text>
            </RectButton>

        </KeyboardAvoidingView>
    );
}

export default InitialPageCompany;