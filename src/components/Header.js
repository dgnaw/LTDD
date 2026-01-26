import React from "react";

import {View, Text, StyleSheet } from 'react-native';

export default function Header ({ title }){
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header : {
        height : 50,
        justifyContent : 'center',
        paddingHorizontal : 16,
        borderBottomWidth : 1,
        borderBottomColor: '#f0f0f0',
    },
    headerTitle: {
        fontSize : 18,
        fontWeight : 'bold',
        color : '#000',
    },
});