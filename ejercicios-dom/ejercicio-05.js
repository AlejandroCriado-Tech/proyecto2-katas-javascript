// Ejercicio 5 - Lista de albums con apariencia de web completa

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const app = document.getElementById('app');
const ul = document.createElement('ul');

for (const album of albums) {
    const li = document.createElement('li');
    li.textContent = album;
    ul.appendChild(li);
}

app.appendChild(ul);
