var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let A = lines.shift();
let salarioFixo = Number(lines.shift());
let vendas = Number(lines.shift());
let salario = salarioFixo + (vendas * 0.15);
console.log(`TOTAL = R$ ${salario.toFixed(2)}`);