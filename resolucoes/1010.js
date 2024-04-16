var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (linha) => linha.split(" ").map((item) => Number(item));

let primeiraLinha = pegarValores(lines.shift());
let segundaLinha = pegarValores(lines.shift());
let valorTotal = (primeiraLinha[1] * primeiraLinha.pop()) + (segundaLinha[1] * segundaLinha.pop());
console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);
