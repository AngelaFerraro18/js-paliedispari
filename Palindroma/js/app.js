
//creo un prompt dove chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola:');

//creo una variabile per fare una verifica che il dato inserito non sia un numero
const wordUserCheck = isNaN(userWord);

//se l'utente ha inserito una parola, potrà proseguire con il giochino
if (wordUserCheck){
    
    //chiedo se la parola sia palindroma o meno invocando la funzione creata in un if/else
    if (polindromeWord(userWord)) {
        console.log('La parola è palindroma');
    } else {
        console.log('La parola non è palindroma');
    }

//altrimenti si verificherà un errore
} else {
    console.error('Non hai inserito una parola!');
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
