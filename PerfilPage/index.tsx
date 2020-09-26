import React from 'react'
import styles from './styles'

import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';

import logoImg from '../../../assets/images/logo.png';

function PerfilPage() {

    return (
        <KeyboardAvoidingView style={styles.container}>

        <View style = {styles.logo}> 
            <Image style = {styles.imageLogo} source={logoImg}/>
            <Text style = {styles.logoPerfil}>Perfil</Text>
        </View>

        <View style={styles.perfil}>

                    <View style = {styles.inview}>
                         <Text style = {styles.nameView}>Nome:</Text>
                         <Text style = {styles.informationView}>Caio Gabriel</Text>
                    </View>

                    <View style = {styles.inview}>
                        <Text style = {styles.nameView}>CPF:</Text>
                        <Text style = {styles.informationView}>000.000.000-00</Text>
                    </View>

                    <View style = {styles.inview}>
                        <Text style = {styles.nameView}>Data de Nascimento:</Text>
                        <Text style = {styles.informationView}>28/02/2003</Text>
                    </View>

                    <View style = {styles.input}>
                        <Text style = {styles.yeahInput}>Senha:</Text>
                        <TextInput
                         style = {styles.pass}
                         placeholder = "********"
                         placeholderTextColor = "black"
                         autoCorrect={false}
                         onChange={()=> {}}
                         />
                    </View>

                    <View style = {styles.input}>
                        <Text style = {styles.yeahInput}>Numero:</Text>
                        <TextInput
                         style = {styles.pass}
                         placeholder = "(33) 33333333"
                         placeholderTextColor = "black"
                         autoCorrect={false}
                         onChange={()=> {}}
                         />
                    </View>

            <TouchableOpacity style = {styles.btn}>
                <Text style = {styles.btnText}>Sair</Text>
            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
)
}

export default PerfilPage