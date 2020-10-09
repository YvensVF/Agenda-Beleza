import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import logoImage from '../../../assets/images/logo.png';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

function SchedulePage(){

    type ReservedHours = {
        id_rhours: number,
        id_company: number,
        name_company: string,
        id_client: number,
        name_client: string,
        telefone_client: string,
        from_hour: string,
        to_hour: string,
        week_day: number,
    }

    const [data, setData] = useState([])

    async function getReservedHours(){
        const id_client = await AsyncStorage.getItem("token");
        const response = await api.get(`/reservedhours/client/${id_client}`);
        setData(response.data)
    }
    
    useEffect(() => {
        getReservedHours();
    }, [])

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

    return(
        <View style={styles.container}>

        <View style={styles.logo}>
            <Image source={logoImage} style={styles.logoImage}/>
            <Text style={styles.textCenter}>Agenda</Text>
        </View>

        <TouchableOpacity onPress={getReservedHours}>
            <Text>Clique aqui para atualizar a página!</Text>
        </TouchableOpacity>

        <ScrollView style={styles.sview}>
                {data.map((h: ReservedHours) => (
                    <View key={h.id_rhours} style={styles.saloes}>
                        <Text style={styles.saloonTitle}>{h.name_company}</Text>
                        <Text style={styles.saloonTitle}>{weekname(h.week_day)}</Text>
                        <Text style={styles.saloonTitle}>{h.from_hour} - {h.to_hour}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )};

export default SchedulePage