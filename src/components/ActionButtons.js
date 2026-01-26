import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ActionButton({ title, onPress, disabled}){
    return (
        <TouchableOpacity style={[styles.button, disabled ? styles.buttonInactive : styles.buttonActive]} disabled={disabled} onPress={onPress}>
            <Text style={[styles.buttonText, disabled ? styles.buttonTextInactive : styles.buttonTextActive]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        borderRadius : 6,
        paddingVertical : 14,
        alignItems : 'center',
        justifyContent : 'center',
    },

    buttonInactive : {
        backgroundColor : '#f2f2f2',
    },

    buttonActive : {
        backgroundColor : '#E53935',
    },

    buttonText : {
        fontSize : 16,
        fontWeight : '500',
    },
    buttonTextInactive : {
        color : '#a0a0a0',
    },
    buttonTextActive : {
        color : '#fff',
    },
});