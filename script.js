alert("Nome");

var nome = prompt("Digite o nome: ", nome); /*input*/
console.log("O seu nome é"); /*print*/
console.log(nome);

var mensagem = "Seu nome é: " + nome; 
var elogio = alert(mensagem);

alert("Números");

var numero1 = prompt("Insira o primeiro número:");
var casting1 = parseInt(numero1);

var numero2 = prompt("Insira o segundo número: ");
var casting2 = parseInt(numero2);

console.log(numero1);
console.log(numero2);

var multiplicacao = alert(numero1 * numero2);
var soma = alert(numero1 + numero2);
var subtracao = alert(numero1 - numero2);
var divisao = alert(numero1 / numero2);