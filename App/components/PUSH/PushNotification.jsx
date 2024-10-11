import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const Push = () => {
  useEffect(() => {
    // Inicialização do Firebase Cloud Messaging (FCM)
    async function initializeFCM() {
      // Solicita permissão para exibir notificações (opcional)
      await messaging().requestPermission();

      // Obtém o token de registro do dispositivo
      const fcmToken = await messaging().getToken();
      console.log('FCM Token:', fcmToken);

      // Configura um listener para receber mensagens de notificação quando o aplicativo estiver em primeiro plano
      messaging().onMessage(async remoteMessage => {
        console.log('Mensagem de Notificação em Primeiro Plano:', remoteMessage);
      });

      // Configura um listener para receber mensagens de notificação quando o aplicativo estiver em segundo plano ou fechado
      messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Mensagem de Notificação em Segundo Plano:', remoteMessage);
      });
    }

    // Chama a função para inicializar o FCM
    initializeFCM().catch(error => console.log('Erro ao inicializar o FCM:', error));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Aplicativo React Native com Firebase Cloud Messaging</Text>
    </View>
  );
}

export default Push;
