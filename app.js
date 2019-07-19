const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".result");
const result_div = document.querySelector(".result");
const par_div = document.getElementById("p");
const impar_div = document.getElementById("i");
 

function getComputerChoice() {
    const choices = ["p", "i"];
    const randomNumber = Math.floor(Math.random() * 2);
    return choices[randomNumber];
}

function getUserChoice() {
    const choices = ["p", "i"];
    const 
}

/* Pensei em fazer a lógica do jogo de duas formas: 

a primeira pela via matemática com números mesmos.
que seria pegar os números aleatórios ímpares e somar com os números aleatórios pares
e ver se a soma deles dão um número ímpar ou par. O resultado da soma indicaria se o usuário
ganhou ou perdeu. Mas achei complicado. Então pensei de outra forma também.

a segunda seria por string, sem cálculos.
a lógica é: 
par + par = par
par + ímpar = ímpar
ímpar + ímpar = par

dependendo da aleatoriedade que o computador escolher (par ou ímpar), 
e da escolha do usuário (decide consciente qual quer: par ou ímpar), 
o resultado seria a soma dessas escolhas. essa soma só pode ser um 
número par ou ímpar.
isso determinaria quem ganhou o jogo.

acho essa segunda forma mais "fácil", porque podemos definir a lógica de antemão.

var a = "p";
if (a % 2 === 0) {
    document.write("Par");
} else {
    document.write("Impar");
}
 
var b = "i";
if (b % 2 === 0) {
    document.write("Par");
} else {
    document.write ("Impar");
}
*/



function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pi":
        case "ip":
            console.log("VITÓRIA DO USUÁRIO.");
            break;
        case "ip":
        case "pi":
            console.log("VITÓRIA DO COMPUTADOR.")
            break;
    }
}

function main() {
    par_div.addEventListener('click', function() {
        game("p");
    })

    impar_div.addEventListener('click', function() {
        game("i");
    })
}

main();

