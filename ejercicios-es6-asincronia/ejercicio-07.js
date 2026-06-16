// Ejercicio 7 - .filter() + .reduce()

const videogames = [
    { name: 'Final Fantasy VII',                       genders: ['RPG'],                  score: 9.5  },
    { name: 'Assasins Creed Valhalla',                 genders: ['Aventura', 'RPG'],       score: 4.5  },
    { name: 'The Last of Us 2',                        genders: ['Acción', 'Aventura'],    score: 9.8  },
    { name: 'Super Mario Bros',                        genders: ['Plataforma'],            score: 8.5  },
    { name: 'Genshin Impact',                          genders: ['RPG', 'Aventura'],       score: 7.5  },
    { name: 'Legend of Zelda: Breath of the wild',     genders: ['RPG'],                  score: 10   },
];

// Filtramos los juegos que tengan 'RPG' en su array de géneros
const rpgGames = videogames.filter(game => game.genders.find(g => g === 'RPG'));
console.log('Juegos RPG:', rpgGames.map(g => g.name));

// Media de sus scores con .reduce()
const rpgAverage = rpgGames.reduce((acc, game, index, arr) => {
    acc += game.score;
    return index === arr.length - 1 ? acc / arr.length : acc;
}, 0);
console.log('Media de score RPG:', rpgAverage);
