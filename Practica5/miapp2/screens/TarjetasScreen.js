import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from '../Components/Perfil';

export default function TarjetasScreen() {
    return (
        <View style={styles.container}>

            <Perfil
                estiloExt={styles.tarjetaRoja}
                nombre="Maria Cruz Camargo Araujo"
                carrera="Ingeniería en Sistemas Computacionales"
                materia="Programación Móvil"
                cuatrimestre="9°"
            />

            <Perfil
                estiloExt={styles.tarjetaVerde}
                nombre="MariCruz"
                carrera="ICS"
                materia="PM"
                cuatrimestre="9°"
            />

            <Perfil
                estiloExt={styles.tarjetaRoja}
                nombre="Maria Cruz Camargo Araujo"
                carrera="Ingeniería en Sistemas Computacionales"
                materia="Programación Móvil"
                cuatrimestre="9°"
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },


    tarjetaRoja: {
        backgroundColor: 'red',
    },

    tarjetaVerde: {
        backgroundColor: 'green',
    },
});