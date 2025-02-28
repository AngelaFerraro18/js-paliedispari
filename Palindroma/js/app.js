
//creo un prompt dove chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola:');

//chiedo se la parola sia palindroma o meno invocando la funzione creata in un if/else
if (polindromeWord(userWord)) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}

//creo una funzione con un ciclo for per ricreare la parola immessa al contrario e determinarne un confronto
function polindromeWord(wordInput) {
    let reverseUserWord = '';
    for (i = userWord.length - 1; i >= 0; i--) {
        reverseUserWord += userWord[i];
    }
    console.log(reverseUserWord);

    return reverseUserWord === userWord;
}
