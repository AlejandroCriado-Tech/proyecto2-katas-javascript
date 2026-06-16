// Ejercicio 4 - .filter()

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const streamers = [
    { name: 'Rubius',    age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai',      age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven',     age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' },
];

// 4.1 - Edades mayores que 18
const over18 = ages.filter(age => age > 18);
console.log(over18);

// 4.2 - Edades pares
const evenAges = ages.filter(age => age % 2 === 0);
console.log(evenAges);

// 4.3 - Streamers con gameMorePlayed = 'League of Legends'
const lolStreamers = streamers.filter(s => s.gameMorePlayed === 'League of Legends');
console.log(lolStreamers);

// 4.4 - Streamers cuyo nombre incluye la letra 'u'
const uNameStreamers = streamers.filter(s => s.name.includes('u'));
console.log(uNameStreamers);

// 4.5 - Streamers con 'Legends' en gameMorePlayed
//       y gameMorePlayed en MAYÚSCULAS si age > 35
const legendsStreamers = streamers
    .filter(s => s.gameMorePlayed.includes('Legends'))
    .map(s => s.age > 35
        ? { ...s, gameMorePlayed: s.gameMorePlayed.toUpperCase() }
        : s
    );
console.log(legendsStreamers);
