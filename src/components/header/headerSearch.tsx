import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import CaixadePesquisa from '../inputs/pesquisa';
import FilterButton from '../buttons/FilterButton';

interface HeaderProps {
    pagina?: string;
    searchBox?: boolean;
}

export default function headerSearch({ pagina = 'Página', searchBox = false }: HeaderProps) {
    const router = useRouter();

    function back() {
        router.back();
    }

    return (
        <View style={{backgroundColor: '#fff', borderBottomRightRadius:  30, borderBottomLeftRadius:  30, height:180}}>
            <View style={styles.header}>
            {/* Botão de voltar */}
                <Pressable onPress={back} style={styles.backButton}>
                    <AntDesign name="arrowleft" size={24} color={'#000'} />
                </Pressable>

                {/* Título da página */}
                <Text style={styles.text}>{pagina}</Text>

                <AntDesign name="arrowleft" size={24} color={'#fff'} style={styles.backButton} />
            </View>
            
            <View>
                {searchBox && <CaixadePesquisa/>}
                {searchBox && <FilterButton/>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: colors.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomRightRadius:  30, 
        borderBottomLeftRadius:  30, 
    },
    backButton: {
        padding: 10,
    },
    text: {
        fontSize: 22,
        flex: 1,
        textAlign: 'center',
    },
});
