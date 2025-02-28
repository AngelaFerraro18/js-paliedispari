

const userWord = prompt('Inserisci una parola:');

let reverseUserWord = '';
for (i = userWord.length - 1; i >= 0; i--){
     reverseUserWord += userWord[i];
} 
console.log(reverseUserWord);

if (reverseUserWord === userWord){
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}




