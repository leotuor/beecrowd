var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let numeroFuncionario = Number(lines.shift());
let horasTrabalhadas = Number(lines.shift());
let salarioHora = Number(lines.shift());
let salarioFinal = salarioHora * horasTrabalhadas;
console.log(`NUMBER = ${numeroFuncionario}\nSALARY = U$ ${salarioFinal.toFixed(2)}`);