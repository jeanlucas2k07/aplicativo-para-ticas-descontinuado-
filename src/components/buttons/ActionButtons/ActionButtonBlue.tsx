import { Pressable, StyleSheet, View, Text } from "react-native";
import { colors } from "@/constants/Colors";
import React from 'react';


interface ButtonProps{
    label: string,
    onPress?: () => void
}

export default function ActionButtonBlue({label, onPress}: ButtonProps) {

    return(
        <View style={styles.buttonContainer}>
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.textButton}>{label}</Text>
        </Pressable>
    </View>

    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: colors.btnBlue,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 0,
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
    },
    buttonContainer: {
        width: '100%',
      },
})
