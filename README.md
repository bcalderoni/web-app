# web-app

JOGO PAR OU IMPAR

Pensei em fazer a lógica do jogo de duas formas: 

A primeira pela via matemática com números mesmos. Funcionaria assim: escolher os números aleatórios ímpares e somar com os números aleatórios pares e ver se a soma deles dão um número ímpar ou par. O resultado da soma indicaria se o usuário
ganhou ou perdeu. 

Mas achei complicado.

Então pensei de outra forma também.

A segunda forma seria por string, sem cálculos.

A lógica é: 

par + par = par

par + ímpar = ímpar

ímpar + ímpar = par

Ou seja, dependendo da aleatoriedade que o computador escolher (par ou ímpar), e da escolha do usuário (decide consciente qual quer: par ou ímpar), o resultado seria a soma dessas escolhas. essa soma só pode ser um 
número par ou ímpar. Isso determinaria quem ganhou o jogo.

Acho essa segunda forma mais "fácil", porque podemos definir a lógica de antemão.

A dúvida é: faço cada um desses casos usando switch? 
