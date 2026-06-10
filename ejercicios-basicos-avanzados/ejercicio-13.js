// Ejercicio 13
const names = ["Peter","Steve","Tony","Natasha","Clint","Logan","Xabier","Bruce","Peggy","Jessica","Marc"];

// Recibe también el valor a buscar
function nameFinder(nameList, value) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === value) {
      return { found: true, position: i };
    }
  }
  return { found: false };
}

console.log(nameFinder(names, "Tony"));       // { found: true, position: 2 }
console.log(nameFinder(names, "Wolverine"));  // { found: false }
