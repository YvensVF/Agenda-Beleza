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

                    <View style = {styles.nameView}>
                         <Text style = {styles.viewName}>Nome:</Text>
                         <Text style = {styles.nome}>Caio Gabriel</Text>
                    </View>

                    <View style = {styles.cpfView}>
                        <Text style = {styles.viewCpf}>CPF:</Text>
                        <Text style = {styles.cpf}>000.000.000-00</Text>
                    </View>

                    <View style = {styles.dateView}>
                        <Text style = {styles.viewDate}>Data de Nascimento:</Text>
                        <Text style = {styles.date}>28/02/2003</Text>
                    </View>

                    <View>
                        <Text style = {styles.yeahInput}>Senha:</Text>
                        <Text style =  {styles.pass}>******</Text>
                        <TextInput 
                            style = {styles.input}
                            autoCorrect={false}
                            onChange={()=> {}}
                        />
                    </View>

                    <View>
                        <Text style = {styles.yeahInput}>Numero:</Text>
                        <Text style = {styles.pass}>(33)3333333</Text>
                        <TextInput
                            style = {styles.input}
                            autoCorrect={false}
                            onChange={()=>{}}
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