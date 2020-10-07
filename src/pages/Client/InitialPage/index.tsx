import { RectButton, ScrollView} from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { Image, Text, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'
import logoImg from '../../../assets/images/logo.png';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

function InitialPage(){

    type Company = {
        id: number,
        name: string,
        email: string,
        cnpj: string,
        tel: string,
        endereco: string,
    }


    const {navigate} = useNavigation();

    const [data, setData] = useState([])

    useEffect(() => {
        loadCompany()
    }, [])

    async function loadCompany(){
        const response = await api.get('/company')
        const {data} = response;
        setData(data)
    }

    async function handleNavigatetoCompanyPage(id: number){
        await AsyncStorage.setItem("id_company", JSON.stringify(id))
        navigate("CompanyPage")
    }

    return(
        <View style={styles.container}>

            <View style={styles.logo}>
                <Image source={logoImg} style={styles.logoImg}/>
                <Text style={styles.textCenter}>Salões que talvez você se interesse!</Text>
            </View>

            <ScrollView style={styles.sview}>
            {data.map((c: Company) => (
                <RectButton style={styles.saloes} key={c.id} onPress={() => {handleNavigatetoCompanyPage(c.id)}}>
                    <Text style={styles.saloonTitle}>{c.name}</Text>
                    <Text style={styles.saloonText}>{c.endereco}</Text>
                    <Text style={styles.saloonText}>CNPJ: {c.cnpj}</Text>
                    <Text style={styles.saloonText}>Telefone: {c.tel}</Text>
                </RectButton>
            ))}
            </ScrollView>

        </View>
    )
}

export default InitialPage;