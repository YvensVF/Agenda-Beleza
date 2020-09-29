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
                         <TextInput
                         style = {styles.pass}
                         value = {'Caio Gabriel'}
                         autoCorrect={false}
                         onChange={()=> {}}
                         editable={false}
                         />
                    </View>

                    <View style = {styles.inview}>
                        <Text style = {styles.nameView}>CPF:</Text>
                        <TextInput
                         style = {styles.pass}
                         value = {'000.000.000-00'}
                         autoCorrect={false}
                         onChange={()=> {}}
                         editable={false}
                         />
                    </View>

                    <View style = {styles.inview}>
                        <Text style = {styles.nameView}>Data de Nascimento:</Text>
                        <TextInput
                         style = {styles.pass}
                         value = {'28/02/2003'}
                         autoCorrect={false}
                         onChange={()=> {}}
                         editable={false}
                         />
                    </View>

                    <View style = {styles.input}>
                        <Text style = {styles.yeahInput}>Senha:</Text>
                        <TextInput
                         style = {styles.pass}
                         value = {'*********'}
                         autoCorrect={false}
                         onChange={()=> {}}
                         />
                    </View>

                    <View style = {styles.input}>
                        <Text style = {styles.yeahInput}>Numero:</Text>
                        <TextInput
                         style = {styles.pass}
                         value = {'(85) 3333333333'}
                         autoCorrect={false}
                         onChange={()=> {}}
                         />
                    </View>

            <TouchableOpacity style = {styles.btn}>
                <Text style = {styles.btnTextConfirm}>Confirmar</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.btn}>
                <Text style = {styles.btnText}>Deslogar</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
)
}

export default PerfilPage