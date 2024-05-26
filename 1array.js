/////////////
//Lesson 1//

// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

// const notas = [10, 6.5, 8, 7.5]

//const media = (nota1 + nota2 + nota3 + nota4)/4

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(media);



/////////////
//Lesson 2//

const grades = [10, 6.5, 8, 7.5]
function average(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

var output = average(grades);
console.log(output);