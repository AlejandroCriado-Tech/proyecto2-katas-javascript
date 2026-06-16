// Ejercicio 6 - .reduce()

const exams = [
    { name: 'Yuyu Cabeza Crack',          score: 5  },
    { name: 'Maria Aranda Jimenez',        score: 1  },
    { name: 'Cristóbal Martínez Lorenzo',  score: 6  },
    { name: 'Mercedez Regrera Brito',      score: 7  },
    { name: 'Pamela Anderson',             score: 3  },
    { name: 'Enrique Perez Lijó',          score: 6  },
    { name: 'Pedro Benitez Pacheco',       score: 8  },
    { name: 'Ayumi Hamasaki',             score: 4  },
    { name: 'Robert Kiyosaki',            score: 2  },
    { name: 'Keanu Reeves',               score: 10 },
];

// 6.1 - Suma de todas las notas
const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log('Suma total:', totalScore);

// 6.2 - Suma de las notas de los aprobados (nota >= 5)
const passedTotal = exams.reduce((acc, exam) => {
    return exam.score >= 5 ? acc + exam.score : acc;
}, 0);
console.log('Suma aprobados:', passedTotal);

// 6.3 - Media de todas las notas
const average = exams.reduce((acc, exam, index, arr) => {
    acc += exam.score;
    return index === arr.length - 1 ? acc / arr.length : acc;
}, 0);
console.log('Media:', average);
