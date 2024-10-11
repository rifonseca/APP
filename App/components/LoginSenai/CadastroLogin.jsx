import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';
import axios from 'axios';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setsenha] = useState('');

  const handleCadastro = async () => {
    try {
      // Verifica se os campos obrigatórios estão preenchidos
      if (!nome || !sobrenome || !email || !senha) {
        Alert.alert('Erro', 'Todos os campos são obrigatórios!');
        return;
      }

      // Monta o objeto de dados a ser enviado para a API
      const data = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: senha
      };

      // Envia a solicitação POST para a API
      const response = await axios.post('http://10.0.2.2:8082/api/registersenai', data);

      // Verifica se o cadastro foi realizado com sucesso
      if (response.status === 201) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigation.navigate('Login');
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Erro', 'Esse email já se encontra na base de dados. Por favor, insira um email diferente.');
      }
      else {
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar. Por favor, tente novamente.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../img/senai.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        onChangeText={setSobrenome}
        value={sobrenome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setsenha}
        value={senha}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.buttonBack} title="Cadastrar" onPress={handleCadastro}/>
        <View style={styles.buttonBack}/>
        <Button title="Voltar" onPress={() => navigation.navigate('Login')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 40,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '60%',
  },
  buttonBack: {
    marginBottom: 20,
  },
});

export default Cadastro;
