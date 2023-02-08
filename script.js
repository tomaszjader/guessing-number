function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
let startButton = document.querySelector('.start-js');
let message = document.querySelector('.message-js');
let inputNumber = document.querySelector('.input-js');
let checkButton = document.querySelector('.check-js');
let randomNumber = 0;
let numberToCheck = 0;
const MAX = 100;
startButton.onclick = () =>{
    randomNumber = getRandomInt(MAX);
}
checkButton.onclick = () =>{
    numberToCheck = parseInt(inputNumber.value);
    if(randomNumber === numberToCheck){
        message.innerHTML = "You win";
    }else if(randomNumber < numberToCheck){
        message.innerHTML = "smaller number";
    }else if(randomNumber > numberToCheck){
        message.innerHTML = "bigger number";
    }
}
