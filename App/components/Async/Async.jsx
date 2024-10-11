import React, { useState } from 'react';
import {Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Async(){

  const [curso, setCurso] = useState(null)

  const armazenar = (chave,valor)=>{
    AsyncStorage.setItem(chave,valor)
  }

  const buscar = async (chave)=>{
    const valor = await AsyncStorage.getItem(chave)
    setCurso(valor)
  }

  armazenar("01", "React Native")
  armazenar("02", "ReactJS")
  armazenar("03", "C#")
  armazenar("04", "Python")
  armazenar("05", "C++")
  armazenar("06", "PHP")
  armazenar("07", "JavaScript")

  buscar("07")

  return(
    <View>
      <Text>Armazenamento local com AsyncStorage</Text>
      <Text>Curso de: {curso}</Text>
    </View>
  )
};