import React, {useEffect, useState} from 'react'
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import { Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';
import logoImage from '../../../assets/images/logo.png';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';


function SchedulePageCompany(){

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

    const [data, setData] = useState([]);

    async function getReservedHours(){
        //AsyncStorage
        const id_company = await AsyncStorage.getItem("token_company");
        //Request
        const response = await api.get(`/reservedhours/company/${id_company}`)

        setData(response.data);
    }

    useEffect(() => {
        getReservedHours();
    }, [])

    async function deleteReservedHour(id: number){
        await api.delete(`/reservedhours/${id}`);
        Alert.alert("Sucesso", "Horário finalizado com sucesso!")
        getReservedHours();
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

    return(
        <View style={styles.container}>

            <View style={styles.logo}>
                <Image source={logoImage} style={styles.logoImage}/>
                <Text style={styles.textCenter}>Clientes</Text>
            </View>

            <TouchableOpacity onPress={getReservedHours}>
                <Text>Clique aqui para atualizar a página!</Text>
            </TouchableOpacity>

            <ScrollView style={styles.sview}>
                {data.map((h: ReservedHours) => (
                    <View key={h.id_rhours} style={styles.clientStatus}>
                        <Text style={styles.clientAppointment}>Cliente: {h.name_client}</Text>
                        <Text style={styles.clientAppointment}>Telefone: {h.telefone_client}</Text>
                        <Text style={styles.clientAppointment}>{weekname(h.week_day)}</Text>
                        <Text style={styles.clientAppointment}>{h.from_hour} - {h.to_hour}</Text>
                        <RectButton onPress={() => {deleteReservedHour(h.id_rhours)}} style={styles.btn}>
                            <Text style={styles.clientAppointment}>
                                Finalizar horário
                            </Text>
                        </RectButton>
                    </View>
                ))}
            </ScrollView>
        </View>
    )};

export default SchedulePageCompany