

const userChoice = prompt("Scegli tra: 'pari' o 'dispari'");
console.log(userChoice);

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5:'));
console.log(userNumber);

const cpuNumber = Math.floor(5 * Math.random()) + 1;
console.log(cpuNumber);


let sumNumbers = userNumber + cpuNumber;
console.log(sumNumbers);

if (sumNumbers % 2 === 0){
    console.log('la somma è pari');
} else {
    console.log('la somma è dispari');
}