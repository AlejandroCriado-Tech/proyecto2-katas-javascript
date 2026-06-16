// Ejercicio 1 - Destructuring

// 1.1 - Object destructuring (no hace falta destructurar el array gender)
const game = { title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020 };
const { title, gender, year } = game;
console.log(title, gender, year);

// 1.2 - Array destructuring con nombres específicos
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

// 1.3 - Destructuring de lo que devuelve una función
const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' };
};
const { name, race } = animalFunction();
console.log(name, race);

// 1.4 - Destructuring mixto: objeto + array interno
{
    const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] };
    const { name, itv } = car;
    const [year1, year2, year3] = itv;
    console.log(name, itv);
    console.log(year1, year2, year3);
}
