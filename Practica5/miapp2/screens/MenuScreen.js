// ZONA 1: Importaciones de componentes y Archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalScreen from './ModalScreen';

// ZONA 2: Main - Hogar de los componentes
export default function MenuScreen() {

    const [screen, setScreen] = useState('menu');

    switch (screen) {

        case 'tarjetas':
            return <TarjetasScreen />;

        case 'SafeArea':
            return <SafeAreaScreen />;

        case 'Pressable':
            return <PressableScreen />;

        case 'TextInput':
            return <TextInputScreen />;

        case 'FlatList':
            return <FlatListScreen />;

        case 'ImageBackground':
            return <ImageBackgroundScreen />;

        case 'ActivityIndicator':
            return <ActivityIndicatorScreen />;

        case 'Modal':
            return <ModalScreen />;

        case 'menu':
        default:

            return (

                <View style={styles.container}>

                    <Text style={styles.titulo}>
                        Menú de Prácticas
                    </Text>

                    <View style={styles.boton}>
                        <Button
                            title="Práctica: Tarjetas"
                            onPress={() => setScreen('tarjetas')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="Práctica: Safe Area"
                            onPress={() => setScreen('SafeArea')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="Práctica: Pressable"
                            onPress={() => setScreen('Pressable')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="Práctica: TextInput"
                            onPress={() => setScreen('TextInput')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="Práctica: FlatList"
                            onPress={() => setScreen('FlatList')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="Práctica: ImageBackground"
                            onPress={() => setScreen('ImageBackground')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="Práctica: ActivityIndicator"
                            onPress={() => setScreen('ActivityIndicator')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="Práctica: Modal"
                            onPress={() => setScreen('Modal')}
                        />
                    </View>

                    <StatusBar style="auto" />

                </View>

            );

    }

}

// ZONA 3: Estilos y Posicionamiento

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2563EB',
        marginBottom: 25,
    },

    boton: {
        width: 260,
        marginBottom: 12,
    },

});