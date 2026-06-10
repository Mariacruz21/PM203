/*Zona1. Importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

/*Zona2. Componente Principal*/
export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./assets/images/wave.png')} />

      <Text>Hola Mundo React Native!</Text>
      <Saludo></Saludo>
      <StatusBar style="auto" />
    </View>
  );
}

/*Zona3. Estilos y Posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
