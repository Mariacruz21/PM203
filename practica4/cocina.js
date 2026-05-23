// PROMESAS

function prepararPedido(producto) {

    return new Promise((resolve, reject) => {

        console.log("Preparando " + producto + "...");


        // variable que cambia aleatoriamente

        let ingredienteDisponible = Math.random() > 0.5;


        // simular tiempo de preparación

        setTimeout(() => {

            if (ingredienteDisponible) {

                resolve(producto + " listo");

            }

            else {

                reject("Ups! Pedido cancelado, falta café para preparar " + producto);

            }

        }, 3000);

    });

}


// Promesa .then y .catch es para manejar el resultado 

prepararPedido("Capuccino")

    .then(resultado => {

        console.log("Éxito:");
        console.log(resultado);

    })

    .catch(error => {

        console.log("Error:");
        console.log(error);

    });