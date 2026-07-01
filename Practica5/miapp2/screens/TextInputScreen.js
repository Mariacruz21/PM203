import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function RegistroEventoUniversitario() {

    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');

    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

    const enviarRegistro = () => {

        if (
            nombre.trim() === '' ||
            carrera.trim() === '' ||
            semestre.trim() === ''
        ) {
            Alert.alert(
                'Campos incompletos',
                'Debes llenar todos los campos.'
            );
            return;
        }

        if (isNaN(semestre)) {
            Alert.alert(
                'Error',
                'El semestre debe ser un número.'
            );
            return;
        }

        Alert.alert(
            'Registro enviado',
            `Nombre: ${nombre}
Carrera: ${carrera}
Semestre: ${semestre}

Taller: ${taller ? 'Sí' : 'No'}
Constancia: ${constancia ? 'Sí' : 'No'}
Deportes: ${deportes ? 'Sí' : 'No'}`
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <StatusBar style="auto" />

            <Text style={styles.titulo}>
                Registro de Evento Universitario
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Carrera"
                value={carrera}
                onChangeText={setCarrera}
            />

            <TextInput
                style={styles.input}
                placeholder="Semestre"
                keyboardType="numeric"
                value={semestre}
                onChangeText={setSemestre}
            />

            <Text style={styles.subtitulo}>
                Opciones
            </Text>

            <View style={styles.fila}>
                <Text style={styles.texto}>
                    ¿Asistirá al taller?
                </Text>

                <Switch
                    value={taller}
                    onValueChange={setTaller}
                />
            </View>

            <View style={styles.fila}>
                <Text style={styles.texto}>
                    ¿Requiere constancia?
                </Text>

                <Switch
                    value={constancia}
                    onValueChange={setConstancia}
                />
            </View>

            <View style={styles.fila}>
                <Text style={styles.texto}>
                    ¿Participará en actividades deportivas?
                </Text>

                <Switch
                    value={deportes}
                    onValueChange={setDeportes}
                />
            </View>

            <TouchableOpacity
                style={styles.boton}
                onPress={enviarRegistro}
            >
                <Text style={styles.textoBoton}>
                    Enviar Registro
                </Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 25,
        justifyContent: 'center'
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        marginBottom: 18,
        fontSize: 17
    },

    subtitulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },

    texto: {
        fontSize: 18,
        flex: 1,
        marginRight: 10
    },

    boton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        marginTop: 30
    },

    textoBoton: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }

});