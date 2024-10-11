// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

// const Atualizar = ({ navigation }) => {
//   const [id, setId] = useState('');
//   const [nome, setNome] = useState('');
//   const [sobrenome, setSobrenome] = useState('');
//   const [idade, setIdade] = useState('');
//   const [camposHabilitados, setCamposHabilitados] = useState(false); 

//   const handleVerificarExistencia = () => {
//     axios.get(`http://10.0.2.2:8082/api/read/${id}`)
//       .then(response => {
//         if (response.data) {
//           setCamposHabilitados(true);
//         } else {
//           Alert.alert('Erro', 'ID de usuário não encontrado na base de dados.');
//         }
//       })
//       .catch(error=>{
//         if(error.response && error.response.status === 401){
//           Alert.alert('Erro', 'Este ID não está cadastrado na base de dados. Por favor, tente novamente com um ID diferente.');
//         }
//       });
//   };

//   const handleAtualizar = () => {
//     const data = {
//       nome: nome,
//       sobrenome: sobrenome,
//       idade: idade
//     };

//     axios.put(`http://10.0.2.2:8082/api/update/${id}`, data)
//       .then(response => {
//         Alert.alert('Sucesso', 'Usuário atualizado com sucesso!');
//         setId('');
//         setNome('');
//         setSobrenome('');
//         setIdade('');
//         setCamposHabilitados(false);
//       })
//       .catch(error => {
//         if (error.response && error.response.status === 404) {
//           Alert.alert('Erro', 'ID de usuário não encontrado na base de dados.');
//         } else {
//           Alert.alert('Erro', 'Ocorreu um erro ao atualizar o usuário. Por favor, tente novamente.');
//         }
//       });      
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Atualizar Usuário</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="ID do Usuário"
//         value={id}
//         onChangeText={setId}
//         keyboardType="numeric"
//       />
//       <View style={styles.buttonContainer}>
//         <Button title="Verificar Existência" onPress={handleVerificarExistencia} />
//         <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
//       </View>
//       {camposHabilitados && (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Nome"
//             value={nome}
//             onChangeText={setNome}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Sobrenome"
//             value={sobrenome}
//             onChangeText={setSobrenome}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Idade"
//             value={idade}
//             onChangeText={setIdade}
//             keyboardType="numeric"
//           />
//           <View style={styles.buttonContainer}>
//             <Button title="Atualizar" onPress={handleAtualizar} />
//           </View>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     backgroundColor: 'white',
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginBottom: 10,
//   },
// });

// export default Atualizar;
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

// const Atualizar = ({ navigation }) => {
//   const [id, setId] = useState('');
//   const [nome, setNome] = useState('');
//   const [sobrenome, setSobrenome] = useState('');
//   const [idade, setIdade] = useState('');
//   const [idValido, setIdValido] = useState(true);
//   const [nomeValido, setNomeValido] = useState(true);
//   const [sobrenomeValido, setSobrenomeValido] = useState(true);
//   const [idadeValida, setIdadeValida] = useState(true);

//   const handleAtualizar = () => {
//     if (!id || !nome || !sobrenome || !idade) {
//       Alert.alert('Erro', 'Por favor, preencha todos os campos.');
//       return;
//     }

//     const data = {
//       nome: nome,
//       sobrenome: sobrenome,
//       idade: idade
//     };

//     axios.put(`http://10.0.2.2:8082/api/update/${id}`, data)
//       .then(response => {
//         Alert.alert('Sucesso', 'Usuário atualizado com sucesso!');
//         setId('');
//         setNome('');
//         setSobrenome('');
//         setIdade('');
//         setIdValido(true);
//         setNomeValido(true);
//         setSobrenomeValido(true);
//         setIdadeValida(true);
//         navigation.navigate('Home');
//       })
//       .catch(error => {
//         if (error.response && error.response.status === 404) {
//           Alert.alert('Erro', 'ID de usuário não encontrado na base de dados.');
//         } else {
//           Alert.alert('Erro', 'Ocorreu um erro ao atualizar o usuário. Por favor, tente novamente.');
//         }
//       });      
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Atualizar Usuário</Text>
//       <TextInput
//         style={[styles.input, !idValido]}
//         placeholder="ID do Usuário"
//         value={id}
//         onChangeText={(text) => {
//           setId(text);
//           setIdValido(true); 
//         }}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={[styles.input, !nomeValido]}
//         placeholder="Nome"
//         value={nome}
//         onChangeText={(text) => {
//           setNome(text);
//           setNomeValido(true); 
//         }}
//       />
//       <TextInput
//         style={[styles.input, !sobrenomeValido]}
//         placeholder="Sobrenome"
//         value={sobrenome}
//         onChangeText={(text) => {
//           setSobrenome(text);
//           setSobrenomeValido(true); 
//         }}
//       />
//       <TextInput
//         style={[styles.input, !idadeValida]}
//         placeholder="Idade"
//         value={idade}
//         onChangeText={(text) => {
//           setIdade(text);
//           setIdadeValida(true); 
//         }}
//         keyboardType="numeric"
//       />
//       <View style={styles.buttonContainer}>
//         <Button title="Atualizar" onPress={handleAtualizar} />
//         <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     backgroundColor: 'white',
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//   },
//   inputError: {
//     borderColor: 'red',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginTop: 20,
//   },
// });

// export default Atualizar;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Atualizar = ({ navigation, route }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');

  const id = route.params.id; // Obtém o ID passado da navegação

  const handleAtualizar = () => {
    if (!nome || !sobrenome || !idade) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const data = {
      nome: nome,
      sobrenome: sobrenome,
      idade: idade
    };

    axios.put(`http://10.0.2.2:8082/api/update/${id}`, data)
      .then(response => {
        Alert.alert('Sucesso', 'Usuário atualizado com sucesso!');
        setNome('');
        setSobrenome('');
        setIdade('');

        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          Alert.alert('Erro', 'ID de usuário não encontrado na base de dados.');
        } else {
          Alert.alert('Erro', 'Ocorreu um erro ao atualizar o usuário. Por favor, tente novamente.');
        }
      });      
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualizar Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Atualizar" onPress={handleAtualizar} />
        <View style={styles.buttonSpacer} />
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonSpacer: {
    width: 10, // Espaçamento entre os botões
  },
});

export default Atualizar;


