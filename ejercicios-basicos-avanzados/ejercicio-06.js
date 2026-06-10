// Ejercicio 6

// 1.1 - Bucle for del 0 al 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 1.2 - Solo cuando el resto de dividir entre 2 es 0 (números pares)
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 1.3 - Contar ovejas: 10 vueltas, cambia el mensaje en la vuelta 10
for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    console.log("¡Dormido!");
  } else {
    console.log("Intentando dormir 🐑");
  }
}
