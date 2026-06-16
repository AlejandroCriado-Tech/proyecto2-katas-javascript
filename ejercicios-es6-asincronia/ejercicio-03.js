// Ejercicio 3 - .map()

const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' },
];

// 3.1 - Array con solo los nombres
const names = users.map(user => user.name);
console.log(names);

// 3.2 - Nombres cambiando a 'Anacleto' los que empiezan por 'A'
const renamedUsers = users.map(user =>
    user.name.startsWith('A') ? 'Anacleto' : user.name
);
console.log(renamedUsers);

// 3.3 - Nombres con ' (Visitado)' cuando isVisited es true
const cities = [
    { isVisited: true,  name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true,  name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' },
];

const cityNames = cities.map(city =>
    city.isVisited ? city.name + ' (Visitado)' : city.name
);
console.log(cityNames);
