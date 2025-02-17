// EXERCICIO 1
const dobro = num => num * 2;
console.log(dobro(7));
console.log(dobro(15));

// EXERCICIO 3 
const mensagemBoasVindas = nome => {
    return `Seja bem-vindo, ${nome}!`;
  };
  
  console.log(mensagemBoasVindas("João"));  // Isso vai imprimir "Seja bem-vindo, João!" no terminal

//EXERCICIO 2
const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // Saída: 5
console.log(dividir(9, 3));  // Saída: 3

//EXERCICIO 4
const executarOperacao = (num1, num2, operacao) => operacao(num1, num2);

// Operações matemáticas como arrow functions
const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;

// Chamando a função executarOperacao com diferentes operações
console.log(executarOperacao(10, 5, soma));         // Saída: 15
console.log(executarOperacao(10, 5, subtracao));   // Saída: 5
console.log(executarOperacao(10, 5, multiplicacao));// Saída: 50
console.log(executarOperacao(10, 5, divisao));    // Saída: 2

// EXERCICIO 5 
const precos = [100, 200, 300, 400, 500];

const precosComDesconto = precos.map(preco => preco * 0.9);

console.log(precosComDesconto); // [90, 180, 270, 360, 450]

// EXERCECIO 6
const idades = [12, 17, 18, 20, 15, 22, 14, 30];

const menoresDeIdade = idades.filter(idade => idade < 18);

console.log(menoresDeIdade); // [12, 17, 15, 14]

// EXERCICIOS 7
const numeros = [2, 3, 4, 5];

const produto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);

console.log(produto); // Saída: 120

