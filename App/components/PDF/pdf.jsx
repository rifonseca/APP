import React from 'react';
import { View, Button, Text, Platform } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';

const UploadScreen = () => {
  const [pdf, setPdf] = React.useState(null);

  const selectPdf = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setPdf(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the picker');
      } else {
        console.error('DocumentPicker Error: ', err);
      }
    }
  };

  const uploadPdf = async () => {
    if (pdf) {
      const data = new FormData();
      data.append('pdf', {
        uri: pdf.uri,
        type: pdf.type,
        name: pdf.name
      });

      try {
        const response = await axios.post('http://<your-server-ip>:3000/upload', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
        alert('Upload successful');
      } catch (error) {
        console.error('Error uploading file: ', error);
        alert('Upload failed');
      }
    } else {
      alert('No file selected');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Select PDF" onPress={selectPdf} />
      {pdf && (
        <Text style={{ margin: 10 }}>{pdf.name}</Text>
      )}
      <Button title="Upload PDF" onPress={uploadPdf} disabled={!pdf} />
    </View>
  );
};

export default UploadScreen;
