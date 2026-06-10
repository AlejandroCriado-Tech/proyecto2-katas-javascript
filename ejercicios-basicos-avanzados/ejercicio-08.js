// Ejercicio 8
const avengers = ["Hulk", "Thor", "Iron Man", "Captain A.", "Spiderman", "Captain M."];

function findLongestWord(stringList) {
  let longest = stringList[0];
  for (let i = 1; i < stringList.length; i++) {
    // Solo actualizamos si es ESTRICTAMENTE más largo (devuelve el primero en caso de empate)
    if (stringList[i].length > longest.length) {
      longest = stringList[i];
    }
  }
  return longest;
}

console.log(findLongestWord(avengers)); // "Spiderman"
