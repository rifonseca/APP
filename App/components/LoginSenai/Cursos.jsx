import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Cursos = ({ navigation }) => {
  const cursos = [
    'Desenvolvimento de Sistemas',
    'Mecatrônica',
    'Eletrônica',
    'Mecânica',
    'Administração',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cursos Disponíveis</Text>
      {cursos.map((curso, index) => (
        <Text key={index} style={styles.cursoItem}>
          {curso}
        </Text>
      ))}
      {/* Botão para voltar para o login */}
      <TouchableOpacity
        style={styles.voltarButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.voltarButtonText}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cursoItem: {
    marginBottom: 10,
    fontSize: 18,
  },
  voltarButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  voltarButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Cursos;
