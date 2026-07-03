const operacoes = require('./utils/operacoes');
const validacoes = require('./utils/validacoes');

const number1 = 10;
const number2 = 5;

if (validacoes.validarNumero(number1) && validacoes.validarNumero(number2)) {

  console.log("Soma:", operacoes.somar(number1, number2));
  console.log("Subtração:", operacoes.subtrair(number1, number2));
  console.log("Multiplicação:", operacoes.multiplicar(number1, number2));
  console.log("Divisão:", operacoes.dividir(number1, number2));

} else {
  console.log("Erro: um dos valores não é válido");
}