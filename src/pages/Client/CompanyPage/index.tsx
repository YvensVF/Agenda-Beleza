import { RectButton, ScrollView } from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { Image, Text, View, Picker } from 'react-native';

import logoImg from '../../../assets/images/logo.png';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';

function CompanyPage(){

    const [name, setName] = useState('')
    const [endereco, setEnd] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')

    useEffect(() => {
        loadData();
    }, [])

    async function loadData(){
        const id = await AsyncStorage.getItem("id_company")
        const response = await api.get(`/company/${id}`)
        const {data} = response;

        setName(data.name)
        setEnd(data.endereco)
        setEmail(data.email)
        setTel(data.tel)
    }

    return(
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image source={logoImg} style={styles.logoImg}/>
            </View>

                <Text style={styles.textBold}>{name}</Text>
                <Text style={styles.text}>{endereco}</Text>
                <Text style={styles.text}>{email}</Text>
                <Text style={styles.text}>{tel}</Text>

                <ScrollView style={styles.scView}>
                    <Text style={styles.textBold}>Horarios disponíveis: </Text>

                    <Picker style={styles.picker}>
                        <Picker.Item label="Selecione um dia da semana" value=""/>
                    </Picker>

                    <Picker style={styles.picker} >
                        <Picker.Item label="Selecione um horario" value=""/>
                    </Picker>

                </ScrollView>

                <RectButton style={styles.button}>
                    <Text style={styles.textButton}>Confirmar</Text>
                </RectButton>
                
        </View>
    );
}
 
export default CompanyPage;