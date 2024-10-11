// Home primeiro programa para acesso ao site do Senai.
// import React from 'react';
// import { View, Text, StyleSheet, Linking, Button } from 'react-native';

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Senai</Text>
//       <Button title = 'senai marília' onPress={()=>{Linking.openURL('https://marilia.sp.senai.br/')}}>Senai Marília</Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red', // Fundo vermelho
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white', // Texto branco para contraste
//   },
// });

// export default Home;

//------------------------------------------------------------------------------------------------------------------
//segundo programa 
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senai</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Click Here"
          onPress={() => Alert.alert("SESI SENAI", "VOCÊ É ALUNO DO CURSO DE DESENVOLVIMENTO DE SISTEMAS")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate('Cadastrar')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Listar"
          onPress={() => navigation.navigate('Listar')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Deletar"
          onPress={() => navigation.navigate('Deletar')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 10,
    width: '50%'
  },
});

export default Home;

//---------------------------------------------------------------------------------------------------------------
