// Ejercicio 3 - DOM avanzado

// 1.1 - Crear ul > li de países dinámicamente
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul31 = document.createElement('ul');
for (const country of countries) {
    const li = document.createElement('li');
    li.textContent = country;
    ul31.appendChild(li);
}
document.body.appendChild(ul31);

// 1.2 - Eliminar el elemento con clase .fn-remove-me
document.querySelector('.fn-remove-me').remove();

// 1.3 - ul > li de coches dentro del div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ul33 = document.createElement('ul');
for (const car of cars) {
    const li = document.createElement('li');
    li.textContent = car;
    ul33.appendChild(li);
}
printHereDiv.appendChild(ul33);

// 1.4 - Crear divs con h4 e img por cada elemento del array
const images = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' },
];

const container = document.createElement('div');
container.id = 'images-container';

for (const item of images) {
    const card = document.createElement('div');
    card.className = 'image-card';

    const h4 = document.createElement('h4');
    h4.textContent = item.title;

    const img = document.createElement('img');
    img.src = item.imgUrl;
    img.alt = item.title;
    img.width = 300;

    // 1.6 - Botón de eliminar para cada div (se añade al crear la tarjeta)
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => card.remove());

    card.appendChild(h4);
    card.appendChild(img);
    card.appendChild(deleteBtn);
    container.appendChild(card);
}

document.body.appendChild(container);

// 1.5 - Botón que elimina el último div de imagen
const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar último';
deleteLastBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.image-card');
    if (cards.length > 0) {
        cards[cards.length - 1].remove();
    }
});
document.body.appendChild(deleteLastBtn);
