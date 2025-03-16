import { Pressable, View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Butam from '../../components/buttons/NavButton';
import { useRouter } from 'expo-router';

interface DataProps{
    usuario: string,
    agendamentos: number,
    meta: number
}

export default function Home({usuario='Usuário(a)', agendamentos=0, meta=0}: DataProps) {
    function goConsultas() {
        router.push('/screens/consultas/consultas');
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image source={require('@/assets/images/logo.png')} style={styles.image} />
                <View style={styles.userInfo}>
                    <Text style={styles.greeting}>Olá, {usuario}!</Text>
                    <Text style={styles.infoText}>Consultas Agendadas: <Text style={styles.highlight}>{agendamentos}</Text></Text>
                    <Text style={styles.infoText}>Meta: <Text style={styles.highlight}>{meta}</Text></Text>
                </View>
            </View>

            {/* Botões de ações */}
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.content}>
                <Butam label="Consultas" iconName="calendar-outline" onPress={goConsultas} />
                <Butam label="Relatórios" iconName="document-text-outline" onPress={() => {router.push('/screens/login/clientes')}}/>
                <Butam label="Enviar Relatório" iconName="cloud-upload-outline" onPress={() => {router.push('/screens/consultas/consultas')}}/>
                <Butam label="Atualizar" iconName="refresh-outline" />
            </ScrollView>

            {/* Botão flutuante */}
            <Pressable style={styles.floatingButton} onPress={goConsultas}>
                <Ionicons name="add" size={28} color="white" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    image: {
        width: 100,
        height: 50,
        marginBottom: 10,
    },
    userInfo: {
        alignItems: 'center',
    },
    greeting: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    infoText: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
    highlight: {
        fontWeight: 'bold',
        color: '#007AFF',
    },
    scrollContainer: {
        flex: 1,
        width: '100%',
        marginTop: 20,
    },
    content: {
        alignItems: 'center',
        paddingBottom: 80,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#007AFF',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
