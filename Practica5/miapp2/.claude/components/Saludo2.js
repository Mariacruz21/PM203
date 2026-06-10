import { View, Button, Image, Text } from "react-native"

const Saludo2 = () => {
    return (
        <View>
            <Image source={require('../assets/images/wave.png')} />
            <Text>Soy un componente compuesto</Text>
            <Button title="Hola 203"> </Button>
        </View>
    );
}

export default Saludo2;