//terceiro programa sobre asyncStorage 2
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Async2 () {
  const [productKey, setProductKey] = useState('');
  const [productValue, setProductValue] = useState('');
  const [products, setProducts] = useState([]);

  // Carregar produtos ao iniciar o aplicativo
  useEffect(() => {
    loadProducts();
  }, []);

  // Carregar produtos salvos no AsyncStorage
  const loadProducts = async () => {
    try {
      const savedProducts = await AsyncStorage.getItem('products');
      if (savedProducts !== null) {
        setProducts(JSON.parse(savedProducts));
      }
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  // Adicionar produto
  const addProduct = async () => {
    try {
      const newProduct = { key: productKey, value: productValue };
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
      setProductKey('');
      setProductValue('');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  // Limpar armazenamento
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      setProducts([]);
    } catch (error) {
      console.error('Erro ao limpar armazenamento:', error);
    }
  };

  // Renderizar cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.key}>{item.key}</Text>
      <Text style={styles.value}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Chave do produto"
        value={productKey}
        onChangeText={text => setProductKey(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Valor do produto"
        value={productValue}
        onChangeText={text => setProductValue(text)}
        style={styles.input}
      />
      <Button title="Adicionar Produto" onPress={addProduct} />
      <Button title="Limpar Armazenamento" onPress={clearStorage} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    minWidth: 250,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  key: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {

  },
});
