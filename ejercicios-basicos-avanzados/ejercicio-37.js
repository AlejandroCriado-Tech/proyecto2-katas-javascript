// Ejercicio 37
const movies = [
  { title: "Bracula: Condemor II",    duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spider-Man: No Way Home", duration: 122, categories: ["aventura", "accion"]  },
  { title: "The Voices",              duration: 223, categories: ["comedia", "thriller"] },
  { title: "Shrek",                   duration: 111, categories: ["comedia", "aventura", "animacion"] },
];

const categorias = [];

for (const movie of movies) {
  for (const category of movie.categories) {
    // includes() evita anadir categorias duplicadas
    if (!categorias.includes(category)) {
      categorias.push(category);
    }
  }
}

console.log(categorias);
// ["comedia", "aventura", "accion", "thriller", "animacion"]
