// Ejercicio 40
const mainCharacters = ["Luke","Leia","Han Solo","Chewbacca","Rey","Anakin","Obi-Wan"];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) return i;
  }
  return -1; // convenio estandar: -1 si no se encuentra
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1); // splice(indice, cantidad) elimina 1 elemento en esa posicion
  }
  return array;
}

console.log(findArrayIndex(mainCharacters, "Rey"));       // 4
console.log(findArrayIndex(mainCharacters, "Leia"));      // 1
console.log(findArrayIndex(mainCharacters, "Palpatine")); // -1

console.log(removeItem([...mainCharacters], "Han Solo"));
console.log(removeItem([...mainCharacters], "Anakin"));
