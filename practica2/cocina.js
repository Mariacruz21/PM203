const catalogo = [

    {
        id: 1,
        nombre: "Café",
        descripcion: "Café negro caliente.",
        precio: 40
    },

    {
        id: 2,
        nombre: "Té",
        descripcion: "Té natural caliente.",
        precio: 35
    },

    {
        id: 3,
        nombre: "Sandwich",
        descripcion: "Sandwich de jamón y queso.",
        precio: 65
    },

    {
        id: 4,
        nombre: "Pastel",
        descripcion: "Rebanada de pastel de chocolate.",
        precio: 50
    },

    {
        id: 5,
        nombre: "Capuccino",
        descripcion: "Café con espuma y leche.",
        precio: 70
    }

];


function mostrarCatalogo() {

    const contenedor = document.getElementById("catalogo");

    contenedor.innerHTML = "";

    catalogo.forEach(producto => {

        contenedor.innerHTML += `

        <div class="producto">

            <h3>${producto.nombre}</h3>

            <p>${producto.descripcion}</p>

            <p>Precio: $${producto.precio}</p>

            <button onclick="eliminarProducto(${producto.id})">
                Eliminar
            </button>

        </div>

        `;
    });
}

function agregarProducto() {

    const nombre = document.getElementById("nombre").value;

    if (nombre === "") {

        alert("Ingresa un producto");

        return;
    }

    const nuevoProducto = {

        id: catalogo.length + 1,

        nombre: nombre,

        descripcion: "Sin descripción.",

        precio: 0

    };

    catalogo.push(nuevoProducto);

    mostrarCatalogo();

    document.getElementById("nombre").value = "";
}


function eliminarProducto(id) {

    const indice = catalogo.findIndex(producto => producto.id === id);

    catalogo.splice(indice, 1);

    mostrarCatalogo();
}


mostrarCatalogo();