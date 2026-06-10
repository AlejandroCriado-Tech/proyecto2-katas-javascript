// Ejercicio 33
const capitals = {
  Spain: "Madrid", France: "Paris", Italy: "Rome", Germany: "Berlin",
  Portugal: "Lisbon", Poland: "Warsaw", Greece: "Athens",
  Austria: "Vienna", Hungary: "Budapest", Ireland: "Dublin",
};

function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  }
  return `No se ha encontrado la capital de ${country}.`;
}

console.log(getCapital("Spain"));  // Madrid
console.log(getCapital("Japan"));  // No se ha encontrado...
