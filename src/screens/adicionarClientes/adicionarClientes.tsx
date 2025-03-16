import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import Header from "@/src/components/header/hearder";
import { Input } from "@/src/components/inputs/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import ActionButtonBlue from "@/src/components/buttons/ActionButtons/ActionButtonBlue";


// Schema de Validação
const schema = z.object({
    nome: z.string().min(1, { message: "O nome é obrigatório" }),
    endereco: z.string().min(1, { message: "O endereço é obrigatório" }),
    bairro: z.string().min(1, { message: "O bairro é obrigatório" }),
    cidade: z.string().min(1, { message: "A cidade é obrigatória" }),
    contato: z.string().min(1, { message: "O contato é obrigatório" }),
    data: z.string().min(1, { message: "A data é obrigatória" })
});

type FormData = z.infer<typeof schema>;

const adicionarClientes = () => {
    async function handleFormSubmit(data: FormData) {
        const dado = {
            "cliente_nome": data.nome,
            "endereco": data.endereco,
            "ponto_referencia": data.bairro,
            "contato": data.contato,
            "bairro": data.bairro
        };

        try {
            const response = await fetch("http://localhost:3333/vender", { // ⚠ Alterei para "http"
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dado),
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar os dados");
            }

            const dados = await response.json();
            console.log("Resposta do servidor:", dados);

        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <Header pagina="Adicionar Consultas" />
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.inputsView}>
                        <Text style={styles.titleStyle}>Nome:</Text>
                        <Input name="nome" placeholder="Ex: Dona Maria" control={control} error={errors.nome?.message} />

                        <Text style={styles.titleStyle}>Endereço:</Text>
                        <Input name="endereco" placeholder="Ex: R. do Mercado, N° 11" control={control} error={errors.endereco?.message} />

                        <Text style={styles.titleStyle}>Bairro:</Text>
                        <Input name="bairro" placeholder="Ex: Centro" control={control} error={errors.bairro?.message} />

                        <Text style={styles.titleStyle}>Cidade:</Text>
                        <Input name="cidade" placeholder="Ex: Martins" control={control} error={errors.cidade?.message} />

                        <Text style={styles.titleStyle}>Data:</Text>
                        <Input name="data" placeholder="Ex: 12/12/2025" control={control} error={errors.data?.message} />

                        <Text style={styles.titleStyle}>Contato:</Text>
                        <Input name="contato" placeholder="Ex: (84) 91234-5678" control={control} error={errors.contato?.message} />

                        <ActionButtonBlue label="Adicionar" onPress={handleSubmit(handleFormSubmit)} />  {/* Alterar a função chamada */}
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
};

export default adicionarClientes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    inputsView: {
        paddingHorizontal: 15,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 30,
    },
    titleStyle: {
        fontSize: 16,
        marginBottom: 6,
        marginStart: 10,
    },
});
