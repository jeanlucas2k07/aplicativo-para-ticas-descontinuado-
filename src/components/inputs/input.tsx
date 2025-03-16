import { View, StyleSheet, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import { Controller } from 'react-hook-form';

interface InputProps {
    name: string;
    control: any;
    placeholder: string;
    rules?: object;
    error?: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    title?: string
}

export function Input({ name, control, placeholder, rules, error, keyboardType = 'default', secureTextEntry = false, title='' }: InputProps) {
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[styles.input, error ? styles.inputError : null]}
                        placeholder={placeholder}
                        placeholderTextColor="#888"
                        onBlur={onBlur}
                        value={value}
                        onChangeText={onChange}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                    />
                )}
            />

            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        width: '100%',
    },
    input: {
        fontSize: 16,
        color: '#333',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderColor: '#868686',
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 55,
        borderWidth: 0.2,
        marginBottom: 10,
        elevation: 2,
        paddingHorizontal: 15,
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 4,
    },
});
