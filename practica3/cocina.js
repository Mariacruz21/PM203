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


// FILTER()

const productosBaratos = catalogo.filter(
    producto => producto.precio < 50
);

console.log(productosBaratos);


const bebidas = catalogo.filter(
    producto => producto.categoria === "bebida"
);

console.log(bebidas);


const postres = catalogo.filter(
    producto => producto.categoria === "postre"
);

console.log(postres);


// FIND()

const productoEncontrado = catalogo.find(
    producto => producto.nombre === "Café"
);

console.log(productoEncontrado);