// Ejercicio 2 - Manipulación del DOM

// Capturo referencias importantes antes de modificar el DOM
const h2InsertHere = document.querySelector('h2.fn-insert-here');
const allBodyDivs = document.querySelectorAll('body > div');
const firstDiv = allBodyDivs[0];
const secondDiv = allBodyDivs[1];

// 2.1 - Insertar un div vacío
const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

// 2.2 - Insertar un div que contenga un p
const divWithP = document.createElement('div');
const pInDiv = document.createElement('p');
pInDiv.textContent = 'Soy un párrafo dentro de un div';
divWithP.appendChild(pInDiv);
document.body.appendChild(divWithP);

// 2.3 - Insertar un div con 6 p usando loop
const divWith6P = document.createElement('div');
for (let i = 1; i <= 6; i++) {
    const p = document.createElement('p');
    p.textContent = `Párrafo ${i}`;
    divWith6P.appendChild(p);
}
document.body.appendChild(divWith6P);

// 2.4 - Insertar un p con el texto 'Soy dinámico!'
const dinamicP = document.createElement('p');
dinamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dinamicP);

// 2.5 - Insertar 'Wubba Lubba dub dub' en el h2 con clase .fn-insert-here
h2InsertHere.textContent = 'Wubba Lubba dub dub';

// 2.6 - Crear ul > li desde el array apps
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
for (const app of apps) {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7 - Eliminar todos los nodos con clase .fn-remove-me
const toRemove = document.querySelectorAll('.fn-remove-me');
toRemove.forEach(el => el.remove());

// 2.8 - Insertar p 'Voy en medio!' entre los dos div sin clase
// Usamos la referencia capturada al inicio, antes de los appends
const midP = document.createElement('p');
midP.textContent = 'Voy en medio!';
secondDiv.insertAdjacentElement('beforebegin', midP);

// 2.9 - Insertar p 'Voy dentro!' dentro de todos los div con clase .fn-insert-here
const insertHereDivs = document.querySelectorAll('div.fn-insert-here');
insertHereDivs.forEach(div => {
    const p = document.createElement('p');
    p.textContent = 'Voy dentro!';
    div.appendChild(p);
});
