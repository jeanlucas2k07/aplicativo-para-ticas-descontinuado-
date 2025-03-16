import { Ionicons } from "@expo/vector-icons";
import {TextInput, StyleSheet, View} from 'react-native'

export default function CaixadePesquisa(){
    return(
        <View style={style.container}>
            <TextInput style={style.input}placeholder="Pesquisa..."/>
        </View>
    )
}

const style = StyleSheet.create(
    {
        container:{
            paddingHorizontal:15,
            flex: 1,
        },

        input:{
            borderBottomColor: "#d9d9d9",
            borderBottomWidth: 1,
            height: 50,
            width: "100%",
            marginTop: 10
        }
    }
)