import React, { useState } from 'react';
import { Image, StyleSheet,Text } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
export default function HomeScreen() {
    const [amount, setAmount] = useState();
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.jpg")}></Image>
            <Text  style={styles.tagline}>Pay Anytime,Anywhere,Anyone!</Text>
            <Image style={styles.image} source={require("../assets/pic.png")}></Image>
            <AppTextInput
                placeholder="Enter Amount to Pay"
                autoCorrect={false}
                icon="rupee"
                keyboardType='numeric'
                maxLength={6}
                onChangeText={text => setAmount(text)}
            />
            <AppButton title="Pay with UPI" onPress={() =>
                {
                    if(amount>1){
                        alert("Amount will be paid"+amount)
                    }else{
                        alert("Amount Invalid!")
                    }
                } } />
        </Screen>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",

    },
    image:{
        width:"100%",
        height:300,
        alignSelf: "center",
    },
    tagline:{
        alignSelf:"center",
        fontWeight:"bold"
    }

});