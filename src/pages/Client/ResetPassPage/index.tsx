import React from 'react';

import {View, Text, Image} from 'react-native';

import styles from './styles';
import Logo from '../../../assets/images/logo.png';

function ResetPassPage(){
    return(
        <View style={styles.container}> 
            <View style={styles.logo}>
                <Image source={Logo} style={styles.logoImg}/>
            </View>

            <View style={styles.textArea}>
                <Text style={styles.text}>
                    Chame-nos através do email agendabeleza@gmail.com para que um 
                    administrador possa resetar sua senha!
                </Text>
            </View>
        </View>
    )
}

export default ResetPassPage;