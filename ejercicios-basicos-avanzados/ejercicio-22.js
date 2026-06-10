// Ejercicio 22
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura",  isVegan: true  },
  { name: "Salmon", isVegan: false },
  { name: "Tofu",   isVegan: true  },
  { name: "Burger", isVegan: false },
  { name: "Rice",   isVegan: true  },
  { name: "Pasta",  isVegan: true  },
];

let fruitIndex = 0;
for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    foodSchedule[i].name = fruits[fruitIndex];
    fruitIndex++; // avanzamos al siguiente fruto para no repetir
  }
}

console.log(foodSchedule);
