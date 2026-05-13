console.log("Hola mundo Js servidor ");

/*medir el tiempo del proceso*/

console.time("miProceso");

for (let i = 0; i < 1000000; i++) { }

console.timeEnd("miProceso");

/*  Objetos tipo tabla */

let usuarios = [
    { nombre: "Mari", edad: 21 },
    { nombre: "Cruz", edad: 21 },
];

console.table(usuarios);
