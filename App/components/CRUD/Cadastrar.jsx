import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Cadastrar = ({ navigation }) => {
  const [mensagem, setMensagem] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    sobrenome: '',
    idade: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCadastrar = async () => {
    if (!formData.id || !formData.nome || !formData.sobrenome || !formData.idade) {
      setMensagem('Todos os campos são obrigatórios!');
      return;
    }

    try {
      await axios.post('http://10.0.2.2:8082/api/registersenai', formData);
      Alert.alert('Cadastro efetuado com sucesso!!!');
      navigation.navigate('Home');
    } catch (error) {
      if (error.response.status === 401) {
        setMensagem('O ID ' + formData.id + ' já existe na base de dados!!!');
      } else {
        console.error('Erro ao cadastrar:', error);
        setMensagem('Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        onChangeText={(text) => handleInputChange('id', text)}
        value={formData.id}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(text) => handleInputChange('nome', text)}
        value={formData.nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        onChangeText={(text) => handleInputChange('sobrenome', text)}
        value={formData.sobrenome}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        onChangeText={(text) => handleInputChange('idade', text)}
        value={formData.idade}
        keyboardType="numeric"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
        </View>
        <View style={styles.button}>
          <Button title="Listar" onPress={() => navigation.navigate('Listar')} />
        </View>
        <View style={styles.button}>
          <Button title="Deletar" onPress={() => navigation.navigate('Deletar')} />
        </View>
        <View style={styles.button}>
          <Button title="Cadastrar" onPress={handleCadastrar} />
        </View>
      </View>
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
  },
  button: {
    marginBottom: 10,
    width: '100%',
  },
  mensagem: {
    color: 'red',
    marginTop: 10,
  },
});

export default Cadastrar;
