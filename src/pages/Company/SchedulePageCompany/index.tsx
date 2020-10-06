import React from 'react'
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import logoImage from '../../../assets/images/logo.png';


function SchedulePageCompany(){
    return(
        <View style={styles.container}>

        <View style={styles.logo}>
            <Image source={logoImage} style={styles.logoImage}/>
            <Text style={styles.textCenter}>Clientes</Text>
        </View>

        <ScrollView style={styles.sview}>
                <RectButton style={styles.clientStatus}>
                    <Text style={styles.clientAppointment}>Mikael Silva</Text>
                    <Text style={styles.clientAppointment}>31/02/2024</Text>
                    <Text style = {styles.clientAppointment}>9:00-9:30</Text>
                </RectButton>

                <RectButton style={styles.clientStatus}>
                    <Text style={styles.clientAppointment}>Mikael Silva</Text>
                    <Text style={styles.clientAppointment}>31/02/2024</Text>
                    <Text style = {styles.clientAppointment}>9:00-9:30</Text>
                </RectButton>

                <RectButton style={styles.clientStatus}>
                    <Text style={styles.clientAppointment}>Mikael Silva</Text>
                    <Text style={styles.clientAppointment}>31/02/2024</Text>
                    <Text style = {styles.clientAppointment}>9:00-9:30</Text>
                </RectButton>

                <RectButton style={styles.clientStatus}>
                    <Text style={styles.clientAppointment}>Mikael Silva</Text>
                    <Text style={styles.clientAppointment}>31/02/2024</Text>
                    <Text style = {styles.clientAppointment}>9:00-9:30</Text>
                </RectButton>

                <RectButton style={styles.clientStatus}>
                    <Text style={styles.clientAppointment}>Mikael Silva</Text>
                    <Text style={styles.clientAppointment}>31/02/2024</Text>
                    <Text style = {styles.clientAppointment}>9:00-9:30</Text>
                </RectButton>

                <RectButton style={styles.clientStatus}>
                    <Text style={styles.clientAppointment}>Mikael Silva</Text>
                    <Text style={styles.clientAppointment}>31/02/2024</Text>
                    <Text style = {styles.clientAppointment}>9:00-9:30</Text>
                </RectButton>
            </ScrollView>
        </View>
    )};

export default SchedulePageCompany