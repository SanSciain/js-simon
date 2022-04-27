

const button = document.querySelector("button");
const printNumber = document.getElementById("numbers");
let numbersArray;

button.addEventListener("click",game);

function game(){
    button.style.pointerEvents="none";
    numbersArray=[];
    
    let i = 0;

    while (i<5){
        number = getRndInteger(1, 99);
        if(!(numbersArray.includes(number))){
            numbersArray.push(number);
            i++;
        }
    }

    printNumber.innerHTML= numbersArray;
    setTimeout(gameStart,3000);
}



function gameStart(){
    printNumber.innerHTML="";
    setTimeout(guessNumbers,1);
}



function guessNumbers(){
    
    const guessedNumbers = [];
    for (let j=0; j<5;j++){
        guessNumber=parseInt(prompt("Che numero ricordi?"));
        if (numbersArray.includes(guessNumber) && !(guessedNumbers.includes(guessNumber))){
            guessedNumbers.push(guessNumber);
        }
    }
    printNumber.innerHTML= `hai indovinato ${guessedNumbers.length} numeri : ${guessedNumbers}`;
    button.style.pointerEvents="initial"
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}