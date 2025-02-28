
//chiedo all'utente di scegliere un'opzione
const userChoice = prompt("Scegli tra'pari' o 'dispari' e scrivilo qui sotto:");
console.log(userChoice);

//chiedo all'utente di scrivere un numero compreso tra 1 e 5
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5:'));
console.log(userNumber);

//creo delle variabili per validare il numero inserito
const numberValidation = !isNaN(userNumber);
const numberRange = userNumber >= 1 && userNumber <= 5;

//creo una funzione per la somma dei numeri
function isSumNumbersEven(num1, num2) {
    let sumNumbers = num1 + num2;
    
    if (sumNumbers % 2 === 0) {
        
        return true;
        
    } else {
        
        return false;
    }
}

//creo delle variabili per validare la scritta inserita
const even = 'pari';
const odd = 'dispari';
const userChoiceValidation = (userChoice === even) || (userChoice === odd);
const validationInput = userChoiceValidation && numberValidation && numberRange;

//se tutte le condizioni sono vere, allora iniziamo il gioco
if (validationInput) {

    //genero un numero randomico per il computer e lo stampo in console
    const cpuNumber = Math.floor(5 * Math.random()) + 1;
    console.log(cpuNumber);

    //tramite una funzione controllo i casi in cui l'utente ha scelto "pari" e ha ottenuto una somma pari o viceversa
    if (isSumNumbersEven(userNumber, cpuNumber) && (userChoice === even)) {
        console.log('La somma è pari! Hai vinto!');

    } else if (!isSumNumbersEven(userNumber, cpuNumber) && userChoice === odd) {
        console.log('La somma è dispari! Hai vinto!');

    } else {
        console.log('Il vincitore è il computer!');
    }
//se le condizioni iniziali non sono soddisfatte avremo un errore
} else {
    console.error('Il dato inserito non è corretto');
}



