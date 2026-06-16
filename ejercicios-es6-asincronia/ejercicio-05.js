// Ejercicio 5 - .filter() en tiempo real con input

const streamers = [
    { name: 'Rubius',    age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai',      age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven',     age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' },
];

const input = document.querySelector('[data-function="toFilterStreamers"]');

input.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase();
    const filtered = streamers.filter(s => s.name.toLowerCase().includes(value));
    console.log(filtered);
});
