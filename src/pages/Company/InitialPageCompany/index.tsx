import React from 'react';
import { KeyboardAvoidingView, View, Image, Text, Picker } from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import logoImg from '../../../assets/images/logo.png';
import styles from './styles';

function InitialPageCompany(){
    return(
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.logo}>
                <Image style = {styles.imageLogo} source={logoImg}/>
                <Text style = {styles.logoPerfil}>Cadastro de Horário</Text>
              </View>

            <View style={styles.boxText}>
                <Picker>
                    <Picker.Item label={"Dia da Semana"} value={""}/>
                </Picker>
            </View>

            <View style={styles.boxText}>
                <Picker>
                <Picker.Item label={"Horário"} value={""}/>
                </Picker>
            </View>

            <RectButton style={styles.btn}>
                <Text style={styles.btnText}>Confirmar</Text>
            </RectButton>

            <View style={styles.hours}>

            </View>



        </KeyboardAvoidingView>
    );
}

export default InitialPageCompany;