
//creo un prompt dove chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola:');

let isPalindrome = true;

for (i = 0; i < userWord.length/2; i++){
    if(userWord[i] !== userWord[userWord.length-1-i]){
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome);

