
//creo un prompt dove chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola:');

//creo una funzione per determinare che una parola sia palindroma o no
function isWordPalindrome (wordInputUser){
    let isPalindrome = true;
    for (i = 0; i < userWord.length/2; i++){
        if(userWord[i] !== userWord[userWord.length-1-i]){
            isPalindrome = false;
            break;
        }
    } 
    return isPalindrome;
}

//se la parola risulta palidroma, verrà stampata la parola altrimenti stamperà un messaggio di avviso del contrario
if(isWordPalindrome(userWord)){
    console.log(`La parola è palindroma: ${userWord}`);
} else {
    console.log('La parola non è palindroma.')
}