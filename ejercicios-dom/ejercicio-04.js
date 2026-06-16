// Ejercicio 4 - Eventos

// 1.1 - Evento click en el botón con id btnToClick
const btn = document.getElementById('btnToClick');
btn.addEventListener('click', (event) => {
    console.log(event);
});

// 1.2 - Evento focus en el input con clase .focus
const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (event) => {
    console.log(event.target.value);
});

// 1.3 - Evento input en el input con clase .value (se dispara con cada pulsación)
const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', (event) => {
    console.log(event.target.value);
});
