// Ejercicio 8 - Fetch API Game of Thrones

const characterList = document.getElementById('character-list');
const characterImage = document.querySelector('.character-image');

fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(characters => {
        // Poblar el select con todos los personajes
        for (const character of characters) {
            const option = document.createElement('option');
            option.value = character.id;
            option.textContent = character.fullName;
            characterList.appendChild(option);
        }

        // Mostrar la imagen del primer personaje al cargar
        if (characters.length > 0) {
            characterImage.src = characters[0].imageUrl;
            characterImage.alt = characters[0].fullName;
        }

        // Actualizar imagen al cambiar la selección
        characterList.addEventListener('change', (event) => {
            const selectedId = parseInt(event.target.value);
            const character = characters.find(c => c.id === selectedId);
            if (character) {
                characterImage.src = character.imageUrl;
                characterImage.alt = character.fullName;
            }
        });
    })
    .catch(error => console.error('Error al cargar los personajes:', error));
