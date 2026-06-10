// Ejercicio 23
const movies = [
  { name: "Titan A.E.",                            durationInMinutes: 130 },
  { name: "Nightmare before Christmas",            durationInMinutes: 225 },
  { name: "Inception",                             durationInMinutes: 165 },
  { name: "The Lord of the Rings",                 durationInMinutes: 967 },
  { name: "Star Wars: A New Hope",                 durationInMinutes: 214 },
  { name: "Terminator",                            durationInMinutes: 140 },
  { name: "Spirited Away",                         durationInMinutes: 80  },
  { name: "The Matrix",                            durationInMinutes: 136 },
  { name: "Amelie",                                durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const shortMovies  = []; // menos de 100 min
const mediumMovies = []; // entre 100 y 199 min
const longMovies   = []; // 200 min o mas

for (let i = 0; i < movies.length; i++) {
  const d = movies[i].durationInMinutes;
  if (d < 100) {
    shortMovies.push(movies[i]);
  } else if (d < 200) {
    mediumMovies.push(movies[i]);
  } else {
    longMovies.push(movies[i]);
  }
}

console.log("Pelicula pequena (<100 min):", shortMovies);
console.log("Pelicula mediana (100-199 min):", mediumMovies);
console.log("Pelicula grande (200+ min):", longMovies);
