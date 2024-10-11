import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';

const Professor = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const cadastrarProfessor = async () => {
        // Verifica se todos os campos foram preenchidos
        if (!nome || !sobrenome || !email || !senha) {
            Alert.alert('Todos os campos são obrigatórios.');
            return;
        }

        try {
            const response = await axios.post('http://10.0.2.2:8085/api/registerprofessor', {
                nome: nome,
                sobrenome: sobrenome,
                email:email,
                senha:senha,
            });

            if (response.status === 201) {
                Alert.alert('Cadastro realizado com sucesso!');
                // Limpar os campos após o cadastro
                setNome('');
                setSobrenome('');
                setEmail('');
                setSenha('');
                // Redirecionar para a página inicial após o cadastro
                navigation.navigate('LoginAP');
            } else {
                Alert.alert('Erro', 'Não foi possível cadastrar o professor. Por favor, tente novamente mais tarde.');
            }
        } catch (error) {
            if(error.response.status === 404){
                Alert.alert("Já existe esse email cadastrado no banco de dados, insira um email diferente");
            }
            else{
                console.error('Erro ao cadastrar professor:', error);
                Alert.alert('Erro', 'Não foi possível cadastrar o professor. Por favor, tente novamente mais tarde.');
            }
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inner}>
                <Image source={require('../../img/senai.png')} style={styles.image} />
                <TextInput
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                    style={styles.input}
                    required
                />
                <TextInput
                    placeholder="Sobrenome"
                    value={sobrenome}
                    onChangeText={setSobrenome}
                    style={styles.input}
                    required
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                    required
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry
                    required
                />
                <Button title="Cadastrar" onPress={cadastrarProfessor} color="red" />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});

export default Professor;
