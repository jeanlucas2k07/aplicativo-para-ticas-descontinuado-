import { Pressable, StyleSheet, View, Text } from "react-native";
import { colors } from "@/constants/Colors";

interface ButtonProps{
    label: string,
    onPress?: () => void
}

const ActionButtonRed = ({label, onPress}: ButtonProps) => {
    <View style={styles.buttonContainer}>
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.textButton}>{label}</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: colors.btnRed,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 50,
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
    },
    buttonContainer: {
        width: '100%',
      },
})

export default ActionButtonRed;