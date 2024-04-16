var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let raio = lines.shift();
let pi = 3.14159;
let area = (pi * Math.pow(raio, 2));
console.log(`A=${area.toFixed(4)}`);