// Ejercicio 7
function greaterNumber(numberOne, numberTwo) {
  if (numberOne >= numberTwo) {
    console.log(numberOne);
  } else {
    console.log(numberTwo);
  }
}

greaterNumber(5, 10);  // 10
greaterNumber(20, 8);  // 20
greaterNumber(7, 7);   // 7 (empate: devuelve el primero)
