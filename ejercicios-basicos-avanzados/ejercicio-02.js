// Ejercicio 2

// 2.1 - Luke Skywalker cumple años
// const no impide modificar propiedades del objeto, solo reasignar la variable entera
const jedi = { nombre: "Luke Skywalker", edad: 19 };
jedi.edad = 25;
console.log(jedi);

// 2.2 - Presentación al estilo Leia Organa
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

// 2.3 - Precio total de sables de luz
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };
const precioTotal = sable1.precio + sable2.precio;
console.log(precioTotal);

// 2.4 - Actualizar precio final de naves
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = { nombre: "Halcon Milenario", precioBase: 70000, precioFinal: 80000 };

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;
console.log(nave1);
console.log(nave2);
