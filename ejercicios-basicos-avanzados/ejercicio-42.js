// Ejercicio 42
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantastico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, indexA, indexB) {
  // Guardamos uno de los valores en una variable temporal para no perderlo
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
  return array;
}

console.log(swap([...fantasticFour], 0, 3));
// ["La cosa", "Mr. Fantastico", "La mujer invisible", "La antorcha humana"]

console.log(swap([...fantasticFour], 1, 2));
// ["La antorcha humana", "La mujer invisible", "Mr. Fantastico", "La cosa"]
