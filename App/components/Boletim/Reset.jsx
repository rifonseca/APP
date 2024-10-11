import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const ResetSenha = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleResetSenha = async () => {
        try {
            // Verificar se o email está preenchido
            if (!email) {
                Alert.alert("Por favor, insira seu email.");
                return;
            }

            const data = {
                email: email
            }

            // Verificar se o email existe no banco de dados
            const response = await axios.post('http://10.0.2.2:8085/api/reset', data);

            if (response.status === 200) {
                // Exibir o formulário para trocar a senha
                setMostrarFormulario(true);
            } else if (response.status === 404) {
                Alert.alert("Email não encontrado. Por favor, verifique o email digitado.");
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                Alert.alert('Email não encontrado. Por favor, verifique o email digitado');
            }
            else {
                Alert.alert('Erro ao resetar a senha:', error.message);
            }
        }
    };

    const handleTrocarSenha = async () => {
        try {
            // Verificar se as senhas coincidem
            if (novaSenha !== confirmarSenha) {
                Alert.alert('As senhas não coincidem.');
                return;
            }
            const data = {
                email: email,
                senha: novaSenha
            }

            // Fazer a solicitação para trocar a senha
            const response = await axios.post('http://10.0.2.2:8085/api/resetpassword', data);

            if (response.status === 200) {
                navigation.navigate("LoginAP");
                Alert.alert('Senha trocada com sucesso.');
            } else {
                Alert.alert('Erro ao trocar a senha.');
            }
        } catch (error) {
            Alert.alert('Erro ao trocar a senha:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Esqueceu sua senha?</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
            />
            {!mostrarFormulario && (
                <Button title="Resetar Senha" onPress={handleResetSenha} />
            )}
            {mostrarFormulario && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Nova Senha"
                        value={novaSenha}
                        onChangeText={setNovaSenha}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Senha"
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        secureTextEntry
                    />
                    <Button title="Trocar Senha" onPress={handleTrocarSenha} color="red" />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});

export default ResetSenha;
