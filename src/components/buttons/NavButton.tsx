import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

interface ButamProps {
    label: string;
    iconName?: keyof typeof Ionicons.glyphMap;
    onPress?: () => void;
}

export default function Butam({ label, iconName, onPress }: ButamProps) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <View style={styles.container}>
                <Ionicons name={iconName} size={28} color="white" />
                <Text style={styles.text}>{label}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});
