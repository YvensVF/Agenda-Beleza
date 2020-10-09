import { RectButton, ScrollView } from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { Image, Text, View, Picker, Alert } from 'react-native';

import logoImg from '../../../assets/images/logo.png';
import imageLogo from '../../../assets/images/salaoImageLittle.png'
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';

function CompanyPage(){

    type FreeHour = {
        id_hours: number,
        id_company: number,
        from_hour: string,
        to_hour: string,
        week_day: number
    }

    const [name, setName] = useState('')
    const [endereco, setEnd] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [data, setData] = useState([])

    const [idHour, setIdHour] = useState(0)

    useEffect(() => {
        loadData();
        loadCompanyHours();
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

    async function loadCompanyHours(){
        const id = await AsyncStorage.getItem("id_company")
        const response = await api.get(`/freehours/company/${id}`)
        setData(response.data)
    }

    async function createReservedHour(){

        //Request async storage
        const id_company = await AsyncStorage.getItem("id_company");
        const id_client = await AsyncStorage.getItem("token");

        //Requests
        const client = await api.get(`/clients/${id_client}`)
        const response = await api.get(`/freehours/${idHour}`)
        const company = await api.get(`/company/${id_company}`)

        //Dados
        const name_company = company.data.name;
        const name_client = client.data.name;
        const telefone_client = client.data.telefone;
        const from_hour = response.data.from_hour;
        const to_hour = response.data.to_hour;
        const week_day = response.data.week_day;

        const create = await api.post(`/reservedhours/`, {
            "id_company": id_company,
            "name_company": name_company,
            "id_client": id_client,
            "name_client": name_client,
            "telefone_client": telefone_client,
            "from_hour": from_hour,
            "to_hour": to_hour,
            "week_day": week_day
        })

        if(create.data.id){
            Alert.alert("Sucesso", "Horário reservado com sucesso!")
            await api.delete(`/freehours/${idHour}`)
        }else{
            Alert.alert("Erro", "Impossível reservar um horário. Tente novamente mais tarde!")
        }
    }

    function weekname(n: number){
        switch(n){
            case 1:
                return "Domingo"
                break;
            case 2:
                return "Segunda-feira"
                break;
            case 3: 
                return "Terça-feira"
                break;
            case 4:
                return "Quarta-feira"
                break;
            case 5:
                return "Quinta-feira"
                break;
            case 6:
                return "Sexta-feira"
                break;
            case 7:
                return "Sabado"
                
        }
    }

    return(
        <View style={styles.container}>
            <ScrollView>

                <View style={styles.allInput}>
                    <View style={styles.logoView}>
                        <Image source={logoImg} style={styles.logoImg}/>
                     </View>

                    <Text style={styles.textBold}>{name}</Text>
                    <Text style={styles.text}>{endereco}</Text>
                    <Text style={styles.text}>{email}</Text>
                    <Text style={styles.text}>{tel}</Text>

                    <View style={styles.scView}>
                        <Text style={styles.textBold}>Horarios disponíveis: </Text>

                        <View style={styles.pickerView}>
                            <Picker selectedValue={idHour} onValueChange={(h) => {setIdHour(h)}}>
                                <Picker.Item label="Selecione um horario" value={""}/>
                                {data.map((t: FreeHour) => (
                                    <Picker.Item key={t.id_hours} label={`${weekname(t.week_day)}: ${t.from_hour} - ${t.to_hour}`} value={t.id_hours}/>
                                ))}
                            </Picker>
                        </View>

                        <View style={styles.viewImageSalao}>
                            <Image source={imageLogo} style={styles.imageSalao}/>
                        </View>
                    </View>

                    <RectButton style={styles.button} onPress={createReservedHour}>
                        <Text style={styles.textButton}>Confirmar</Text>
                    </RectButton>
                </View>
           
            </ScrollView>       
        </View>
    );
}
 
export default CompanyPage;