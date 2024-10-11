import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const ListAlunos = ({ navigation }) => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        const obterAlunos = async () => {
            try {
                const response = await axios.get('http://10.0.2.2:8085/api/students');
                setAlunos(response.data);
            } catch (error) {
                console.error('Erro ao obter os alunos:', error);
            }
        };

        obterAlunos();
    }, []);

    const Cabecalho = () => {
        return (
            <View style={styles.cabecalhoContainer}>
                <Text style={styles.cabecalhoTexto}>Nome</Text>
                <View style={styles.espaco}></View>
                <Text style={styles.cabecalhoTexto}>Imagem</Text>
            </View>
        );
    };

    const renderizarItem = ({ item }) => {
        return (
            <View style={styles.alunoContainer}>
                <Text style={styles.nomeCompleto}>{item.nome} {item.sobrenome}</Text>
                {renderizarImagem(item)}
            </View>
        );
    };

    const renderizarImagem = (item) => {
        if (!item.imagem) return null;
        return (
            <View style={styles.imagemContainer}>
                <Image source={{ uri: `data:image/jpeg;base64,${item.imagem}` }} style={styles.imagemAluno} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Cabecalho />
            <FlatList
                data={alunos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderizarItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cabecalhoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    cabecalhoTexto: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    espaco: {
        width: 20,
    },
    alunoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    nomeCompleto: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    imagemContainer: {
        marginLeft: 'auto',
    },
    imagemAluno: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});

export default ListAlunos;
