import { RectButton, ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import logoImage from '../../../assets/images/logo.png';


function SchedulePage(){
    return(
        <View style={styles.container}>

        <View style={styles.logo}>
            <Image source={logoImage} style={styles.logoImage}/>
            <Text style={styles.textCenter}>Agenda</Text>
        </View>

        <ScrollView style={styles.sview}>
                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonTitle}>31/02/2024</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonTitle}>31/02/2024</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonTitle}>31/02/2024</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonTitle}>31/02/2024</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonTitle}>31/02/2024</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonTitle}>31/02/2024</Text>
                </RectButton>
            </ScrollView>
        </View>
    )};

export default SchedulePage