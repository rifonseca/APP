import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import xml2js from 'react-native-xml2js';

const XML_DATA = `
<books>
  <book>
    <title>React Native Cookbook</title>
    <author>William B. Doubtson</author>
  </book>
  <book>
    <title>JavaScript: The Good Parts</title>
    <author>Douglas Crockford</author>
  </book>
</books>
`;

export default function XML() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    parseXMLData(XML_DATA);
  }, []);

  const parseXMLData = (xmlData) => {
    xml2js.parseString(xmlData, (error, result) => {
      if (error) {
        console.error('Erro ao analisar XML:', error);
        return;
      }
      const books = result.books.book;
      setBooks(books);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Livros</Text>
      {books.map((book, index) => (
        <View key={index} style={styles.bookContainer}>
          <Text style={styles.title}>Título: {book.title}</Text>
          <Text style={styles.author}>Autor: {book.author}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
  },
});
