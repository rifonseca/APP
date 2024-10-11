// // Listar.js
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
// import axios from 'axios';

// const Listar = ({ navigation }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://10.0.2.2:8082/api/read')
//       .then(response => {
//         // Ordenar os dados pelo ID em ordem crescente
//         const sortedData = response.data.sort((a, b) => a.id - b.id);
//         setData(sortedData);
//       })
//       .catch(error => {
//         console.log(JSON.stringify(error));
//       });
//   }, []);
  

//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <Text style={styles.itemText}>{item.id}</Text>
//       <Text style={styles.itemText}>{item.nome}</Text>
//       <Text style={styles.itemText}>{item.sobrenome}</Text>
//       <Text style={styles.itemText}>{item.idade}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Lista de Usuários</Text>
//       <View style={styles.tableHeader}>
//         <Text style={styles.headerText}>ID</Text>
//         <Text style={styles.headerText}>Nome</Text>
//         <Text style={styles.headerText}>Sobrenome</Text>
//         <Text style={styles.headerText}>Idade</Text>
//       </View>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//         style={styles.list}
//       />
//       <View style={styles.buttonsContainer}>
//         <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
//         <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastrar')} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#f0f0f0',
//     paddingVertical: 10,
//   },
//   headerText: {
//     flex: 1,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   list: {
//     width: '100%',
//   },
//   item: {
//     flexDirection: 'row',
//     backgroundColor: '#ffffff',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccccc',
//   },
//   itemText: {
//     flex: 1,
//     textAlign: 'center',
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginTop: 20,
//   },
// });

// export default Listar;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Listar = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:8082/api/read')
      .then(response => {
        // Ordenar os dados pelo ID em ordem crescente
        const sortedData = response.data.sort((a, b) => a.id - b.id);
        setData(sortedData);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  }, []);

  const handleAtualizar = (id) => {
    navigation.navigate('Atualizar', { id });
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.id}</Text>
      <Text style={styles.itemText}>{item.nome}</Text>
      <Text style={styles.itemText}>{item.sobrenome}</Text>
      <Text style={styles.itemText}>{item.idade}</Text>
      <TouchableOpacity style={styles.updateButton} onPress={() => handleAtualizar(item.id)}>
        <Text style={styles.updateButtonText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>ID</Text>
        <Text style={styles.headerText}>Nome</Text>
        <Text style={styles.headerText}>Sobrenome</Text>
        <Text style={styles.headerText}>Idade</Text>
        <Text style={styles.headerText}>Ação</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
      <View style={styles.buttonsContainer}>
        <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
        <Button title="Cadastrar" onPress={() => navigation.navigate('Cadastrar')} />
      </View>
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
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  list: {
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    alignItems: 'center',
  },
  itemText: {
    color:'black',
    flex: 1,
    textAlign: 'center',
  },
  updateButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
});

export default Listar;




