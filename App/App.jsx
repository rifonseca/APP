// primeiro programa para acesso ao site do Senai
// import React from 'react';
// import Hour from './components/Hour/hours';

// export default function App() {
//   return (
//     <>
//       {/* <Home/>  */}
//       {/* <Async/> */}
//       {/* <Async2/> */}
//       {/* <Location/> */}
//       <Hour/>
//     </>
//   );
// };

//-----------------------------------------------------------------------------------------------------------------
//Quarto programa com um crud completo para cadastro.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/CRUD/Home';
import Atualizar from './components/CRUD/Atualizar';
import Cadastrar from './components/CRUD/Cadastrar';
import Listar from './components/CRUD/Listar';
import Deletar from './components/CRUD/Deletar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Atualizar" component={Atualizar} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Listar" component={Listar} />
        <Stack.Screen name="Deletar" component={Deletar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

//-----------------------------------------------------------------------------------------------------------------
//Quinto Programa para a tela de login do app Senai
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from './components/LoginSenai/Login';
// import Cadastro from './components/LoginSenai/CadastroLogin'
// import Cursos from './components/LoginSenai/Cursos';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={Login} />
//          <Stack.Screen name="Cadastro" component={Cadastro} />
//         <Stack.Screen name="Cursos" component={Cursos} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

//----------------------------------------------------------------------------------------------------------------
//Maps and Geolocation with permission
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View, Alert } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import { PERMISSIONS, request } from 'react-native-permissions';

// const App = () => {
//   const [location, setLocation] = useState({
//     latitude: -14.235004, // Latitude aproximada do Brasil
//     longitude: -51.92528, // Longitude aproximada do Brasil
//   });

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       try {
//         const permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//         if (permissionStatus === 'granted') {
//           // Se a permissão for concedida, obter a localização atual
//           getCurrentLocation();
//         } else {
//           // Se a permissão for negada, exibir um alerta
//           Alert.alert(
//             'Permissão de localização negada',
//             'Você não receberá notificações de localização'
//           );
//         }
//       } catch (error) {
//         console.error('Erro ao solicitar permissão de localização:', error);
//       }
//     };

//     // Chama a função para solicitar permissão de localização
//     requestLocationPermission();
//   }, []);

//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setLocation({
//           latitude,
//           longitude,
//         });
//       },
//       error => console.error('Erro ao obter a localização atual:', error),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: location.latitude,
//           longitude: location.longitude,
//           latitudeDelta: 40, // Delta de latitude ajustado para mostrar uma área razoável
//           longitudeDelta: 40, // Delta de longitude ajustado para mostrar uma área razoável
//         }}
//       >
//         <Marker
//           coordinate={{ latitude: location.latitude, longitude: location.longitude }}
//           title="Sua localização"
//         />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default App;

//-----------------------------------------------------------------------------------------------------------------------------------

//código para xml
// import React from 'react';
// import XML from './components/XML/xml'; 

// export default function App() {
//   return (
//     <XML/>
//   );
// }
//--------------------------------------------------------------------------------------------------------------

// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';
// import messaging from '@react-native-firebase/messaging';

// const App = () => {
//   useEffect(() => {
//     // Inicialização do Firebase Cloud Messaging (FCM)
//     async function initializeFCM() {
//       // Solicita permissão para exibir notificações (opcional)
//       await messaging().requestPermission();

//       // Obtém o token de registro do dispositivo
//       const fcmToken = await messaging().getToken();
//       console.log('FCM Token:', fcmToken);

//       // Configura um listener para receber mensagens de notificação quando o aplicativo estiver em primeiro plano
//       messaging().onMessage(async remoteMessage => {
//         console.log('Mensagem de Notificação em Primeiro Plano:', remoteMessage);
//       });

//       // Configura um listener para receber mensagens de notificação quando o aplicativo estiver em segundo plano ou fechado
//       messaging().setBackgroundMessageHandler(async remoteMessage => {
//         console.log('Mensagem de Notificação em Segundo Plano:', remoteMessage);
//       });
//     }

//     // Chama a função para inicializar o FCM
//     initializeFCM().catch(error => console.log('Erro ao inicializar o FCM:', error));
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Aplicativo React Native com Firebase Cloud Messaging</Text>
//     </View>
//   );
// }

// export default App;

//---------------------------------------------------------------------------------------

//cadastro aluno e professor
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginAp from './components/Boletim/LoginAP';
// import Registro from './components/Boletim/RegistroAluno';
// import Boletim from './components/Boletim/Boletim';
// import Professor from './components/Boletim/RegistroProfessor';
// import ListAlunos from './components/Boletim/ListaAlunos';
// import Reset from './components/Boletim/Reset';

// const Stack = createStackNavigator();
 
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="LoginAP">
//         <Stack.Screen name="LoginAP" component={LoginAp} />
//         <Stack.Screen name="Registro" component={Registro}/>
//         <Stack.Screen name="Boletim" component={Boletim}/>
//         <Stack.Screen name="Professor" component={Professor}/>
//         <Stack.Screen name="ListAlunos" component={ListAlunos}/>
//         <Stack.Screen name="Reset" component={Reset}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;