// Ejercicio 9 - Fetch PokeAPI con Pokemon aleatorio (Gen 1: 1-151)

const randomId = Math.floor(Math.random() * 151) + 1;
const img = document.querySelector('.random-image');
const nameEl = document.getElementById('pokemon-name');

fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then(response => response.json())
    .then(pokemon => {
        // Usamos el artwork oficial, que tiene la mejor calidad
        img.src = pokemon.sprites.other['official-artwork'].front_default;
        img.alt = pokemon.name;
        nameEl.textContent = `#${pokemon.id} — ${pokemon.name}`;
    })
    .catch(error => console.error('Error al cargar el Pokemon:', error));
