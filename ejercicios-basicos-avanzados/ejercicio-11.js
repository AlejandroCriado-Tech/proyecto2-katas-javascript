// Ejercicio 11
const mixedElements = [6, 1, "Marvel", 1, "hamburguesa", "10", "Prometeo", 8, "Hola mundo"];

function averageWord(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      sum += list[i];         // número: lo sumamos directamente
    } else {
      sum += list[i].length;  // string: sumamos su longitud
    }
  }
  return sum / list.length;
}

console.log(averageWord(mixedElements)); // ~5.89
