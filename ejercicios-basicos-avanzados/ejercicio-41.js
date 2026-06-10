// Ejercicio 41
function rollDice(faces) {
  // Math.random() genera un numero entre 0 (incluido) y 1 (excluido).
  // Con floor() obtenemos un entero entre 0 y faces-1.
  // Sumamos 1 para que el rango sea 1..faces, igual que un dado real.
  return Math.floor(Math.random() * faces) + 1;
}

console.log("Dado de 6 caras:",   rollDice(6));
console.log("Dado de 20 caras:",  rollDice(20));
console.log("Dado de 100 caras:", rollDice(100));
