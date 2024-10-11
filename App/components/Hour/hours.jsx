import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const Registrar = ({ navigation }) => {
  const [sleepTime, setSleepTime] = useState(new Date());
  const [wakeUpTime, setWakeUpTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [info, setInfo] = useState('');

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState(''); 
  const [currentField, setCurrentField] = useState(''); 

  const onChange = (event, selectedValue) => {
    setShow(false);
    if (currentField === 'sleep') {
      setSleepTime(selectedValue || sleepTime);
    } else if (currentField === 'wake') {
      setWakeUpTime(selectedValue || wakeUpTime);
    } else {
      setDate(selectedValue || date);
    }
  };

  const showMode = (currentMode, field) => {
    setShow(true);
    setMode(currentMode);
    setCurrentField(field);
  };

  const formatTime = (time) => {
    return `${time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`;
  };

  const formatDate = (date) => {
    return `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const handleRegistrar = async () => {
    try {
      if (!sleepTime || !wakeUpTime || !date || !info) {
        Alert.alert('Erro', 'Todos os campos são obrigatórios!');
        return;
      }

      const data = {
        horarioS: formatTime(sleepTime),
        horarioW: formatTime(wakeUpTime),
        data: formatDate(date),
        informações: info
      };

      const response = await axios.post('http://10.0.2.2:8085/user/registrar', data);

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Registro realizado com sucesso!');
        navigation.navigate('Login');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Erro', 'Essa informação já se encontra na base de dados. Por favor, insira uma informação diferente.');
      } else {
        Alert.alert('Erro', 'Ocorreu um erro ao registrar. Por favor, tente novamente.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28, fontWeight: '700', marginBottom: 56, color: "#000" }}>Como foi seu sono?</Text>
      <View style={{ backgroundColor: '#FFF', borderRadius: 16, width: '80%', padding: 20 }}>
        
        {/* Campo para Horário de Dormir */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: '#000', fontWeight: '500', marginBottom: 8 }}>Horário em que foi dormir:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.timeInput}
              value={formatTime(sleepTime)}
              placeholder="HH:MM"
              editable={false}
            />
            <TouchableOpacity onPress={() => showMode('time', 'sleep')}>
              <Text style={styles.clockIcon}>⏰</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Campo para Horário de Acordar */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: '#000', fontWeight: '500', marginBottom: 8 }}>Horário em que acordou:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.timeInput}
              value={formatTime(wakeUpTime)}
              placeholder="HH:MM"
              editable={false}
            />
            <TouchableOpacity onPress={() => showMode('time', 'wake')}>
              <Text style={styles.clockIcon}>⏰</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Campo para a Data */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ color: '#000', fontWeight: '500', marginBottom: 8 }}>Data:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.timeInput}
              value={formatDate(date)}
              placeholder="DD/MM/YYYY"
              editable={false}
            />
            <TouchableOpacity onPress={() => showMode('date', 'date')}>
              <Text style={styles.clockIcon}>📅</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Campo para Informações Adicionais */}
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.textFormulario}>Informações:</Text>
          <TextInput
            style={styles.textBox}
            value={info}
            onChangeText={setInfo}
          />
        </View>

        {/* Botão de Registrar */}
        <View style={styles.button}>
          <Button
            title="Registrar"
            onPress={handleRegistrar}
            color="#687d96"
          />
        </View>
      </View>

      {show && (
        <DateTimePicker
          value={currentField === 'date' ? date : currentField === 'sleep' ? sleepTime : wakeUpTime}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e6f3',
  },
  timeInput: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  clockIcon: {
    fontSize: 24,
    marginLeft: 10,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C0DDFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C0DDFF',
    paddingHorizontal: 10,
    width: '100%',
    height: 45,
  },
  button: {
    marginTop: 22,
  },
  textFormulario: {
    color: '#000',
    fontWeight: '500',
    marginBottom: 8
  },
  textBox: {
    backgroundColor: '#C0DDFF',
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40
  },
});

export default Registrar;
