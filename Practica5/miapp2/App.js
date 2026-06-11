/*ZONA 1: Importaciones de componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './Components/Saludo';
import { Saludo2 } from './Components/Saludo2';
import { Perfil } from './Components/Perfil';


/*ZONA 2: Componente Principal */
export default function App() {
  return (
    <View style={styles.container}>

      <Perfil nombre="Maria Cruz Camargo Araujo" carrera="Ingeniería en Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9°" />

      <text>--------------------------------------------------------------------</text>
      <text>--------------------------------------------------------------------</text>

      <Perfil
        nombre="MariCruz"
        carrera="ICS"
        materia="PM"
        cuatrimestre="9°"
      />

      <StatusBar style="auto" />
    </View>
  );
}

/*ZONA 3: Estilos y Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
