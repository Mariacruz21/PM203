import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Switch,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';

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

            <View style={styles.contenedor}>

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

            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20
    },

    contenedor: {
        width: 300,
        backgroundColor: 'white',
        padding: 20,
        borderWidth: 3,
        borderColor: 'black'
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },

    input: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 12,
        marginBottom: 15,
        fontSize: 17
    },

    subtitulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 15
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },

    texto: {
        fontSize: 18,
        flex: 1
    },

    boton: {
        backgroundColor: 'blue',
        padding: 15,
        marginTop: 20
    },

    textoBoton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }

});