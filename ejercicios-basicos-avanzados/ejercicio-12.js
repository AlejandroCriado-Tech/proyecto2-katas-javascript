// Ejercicio 12
const duplicates = [
  "sushi", "pizza", "burger", "potatoe", "pasta",
  "ice-cream", "pizza", "chicken", "onion rings", "pasta", "soda",
];

function removeDuplicates(list) {
  const unique = [];
  for (let i = 0; i < list.length; i++) {
    if (!unique.includes(list[i])) {
      unique.push(list[i]);
    }
  }
  return unique;
}

console.log(removeDuplicates(duplicates));
