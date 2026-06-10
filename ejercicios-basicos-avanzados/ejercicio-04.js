// Ejercicio 4
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Sacar a "Tendo" por su posición (índice 3)
console.log(aldeanos[3]);

// 4.2 - Colocar "Cervasio" al final con push()
aldeanos.push("Cervasio");

// 4.3 - Cambiar el primer elemento por "Bambina"
aldeanos[0] = "Bambina";

// 4.4 - Dar la vuelta al array con reverse()
aldeanos.reverse();

// 4.5 - Cambiar "Narciso" por "Canela" con indexOf() + splice()
const indexNarciso = aldeanos.indexOf("Narciso");
if (indexNarciso !== -1) {
  aldeanos.splice(indexNarciso, 1, "Canela");
}

// 4.6 - Último elemento sin atacar posición explícita (usando length - 1)
console.log(aldeanos[aldeanos.length - 1]);

console.log(aldeanos);
