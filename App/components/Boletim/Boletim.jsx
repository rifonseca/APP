import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Boletim = ({ navigation }) => {
    const [notas] = useState([
        { disciplina: "Matemática", nota: 7.5 },
        { disciplina: "História", nota: 8.0 },
        { disciplina: "Ciências", nota: 6.5 },
        { disciplina: "Literatura", nota: 9.0 },
    ]);

    // Calcular média
    const totalNotas = notas.reduce((acc, cur) => acc + cur.nota, 0);
    const media = totalNotas / notas.length;

    // Verificar se está aprovado
    const status = media >= 7;
    const statusText = status ? 'Aprovado' : 'Reprovado';
    const statusColor = status ? 'green' : 'red';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Boletim Escolar</Text>
            <View style={styles.header}>
                <Text style={styles.headerText}>Disciplinas</Text>
                <Text style={styles.headerText}>Notas</Text>
            </View>
            {notas.map((item, index) => (
                <View key={index} style={styles.row}>
                    <Text style={styles.disciplina}>{item.disciplina}</Text>
                    <Text style={styles.nota}>{item.nota.toFixed(1)}</Text>
                </View>
            ))}
            <Text style={styles.media}>Média: {media.toFixed(1)}</Text>
            <Text style={[styles.status, { color: statusColor }]}>{statusText}</Text>
            <View style={styles.button}>
                <Button title="Voltar para Home" color="red" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: 50, // Espaçamento adicional no topo
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'darkblue',
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'darkblue',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 5,
    },
    disciplina: {
        fontSize: 16,
        color: 'navy',
    },
    nota: {
        fontSize: 16,
        color: 'navy',
    },
    media: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'darkgreen',
        marginTop: 10,
    },
    status: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
    },
    button: {
        width: '80%',
        marginTop: 20, // Espaçamento adicional no topo
    }
});

export default Boletim;
