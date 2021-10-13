import React from 'react'
import { View, TextInput, StyleSheet, Platform } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import colors from '../config/colors';
const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {icon && <FontAwesome name={icon} size={20} color={colors.medium} style={styles.icon} />}
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,

    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.black,
    },
    icon: {
        marginRight: 10
    }
})


export default AppTextInput