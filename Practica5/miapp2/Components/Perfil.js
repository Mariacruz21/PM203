/*Perfil usando Destructuración*/
import { Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre }) => {
    const [mostrar, setMostrar] = useState(false)

    return (
        <View>
            <Text>{nombre}</Text>

            {/*Renderizado condicional*/}
            {mostrar &&
                <>

                    <Text>{carrera}</Text>
                    <Text>{materia}</Text>
                    <Text>{cuatrimestre}</Text>
                </>
            }
            <Button title="Mostrar" onPress={() => setMostrar(!mostrar)} />
        </View>
    )
}


/*Perfil usando props*/

/*import { Text, View, Button } from 'react-native';

export const Perfil = (props) => {

    return (
        <View>
            <Text>{props.nombre}</Text>
            <Text>{props.carrera}</Text>
            <Text>{props.materia}</Text>
            <Text>{props.cuatrimestre}</Text>
        </View>
    )
}*/