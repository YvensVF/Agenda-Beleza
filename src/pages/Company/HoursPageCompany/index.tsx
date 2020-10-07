import { ScrollView} from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles'
import logoImg from '../../../assets/images/logo.png';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

function HoursPageCompany(){

    type FreeHour = {
        id_hours: number,
        id_company: number,
        from_hour: string,
        to_hour: string,
        week_day: number
    }

    const [data, setData] = useState([])

    async function loadHours(){
        const id = await AsyncStorage.getItem("token_company")
        const response = await api.get(`/freehours/company/${id}`)
        setData(response.data)
    }

    function weekname(n: number){
        switch(n){
            case 0:
                return "Domingo"
                break;
            case 1:
                return "Segunda-feira"
                break;
            case 2: 
                return "Terça-feira"
                break;
            case 3:
                return "Quarta-feira"
                break;
            case 4:
                return "Quinta-feira"
                break;
            case 5:
                return "Sexta-feira"
                break;
            case 6:
                return "Sabado"
                
        }
    }

    useEffect(() => {
        loadHours()
    }, [])

    return(
        <View style={styles.container}>

            <View style={styles.logo}>
                <Image source={logoImg} style={styles.logoImg}/>
                <Text style={styles.textCenter}>Horários cadastrados</Text>
            </View>

            <ScrollView style={styles.sview}>
                {data.map((h: FreeHour) => (
                    <View style={styles.saloes} key={h.id_hours}>
                        <Text style={styles.saloonTitle}>{weekname(h.week_day)}</Text>
                        <Text style={styles.saloonText}>{h.from_hour} - {h.to_hour}</Text>
                    </View>
                ))}
            </ScrollView>

        </View>
    )
}

export default HoursPageCompany;