// Ejercicio 17
const alien = { name: "Xenomorph", species: "Xenomorph XX121", origin: "Unknown", weight: 180 };

// for...in itera sobre las claves (keys) de un objeto
for (const key in alien) {
  console.log(`La propiedad ${key} tiene como valor: ${alien[key]}`);
}
