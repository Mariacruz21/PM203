const catalogo = [

    {
        nombre: "Café",
        categoria: "bebida",
        precio: 40,
        stock: 10
    },

    {
        nombre: "Té",
        categoria: "bebida",
        precio: 35,
        stock: 8
    },

    {
        nombre: "Sandwich",
        categoria: "comida",
        precio: 65,
        stock: 5
    },

    {
        nombre: "Pastel",
        categoria: "postre",
        precio: 50,
        stock: 4
    }

];



const productosBaratos = catalogo.filter(
    producto => producto.precio < 50
);



productosBaratos.forEach(producto => {

    console.log(producto.nombre);

});