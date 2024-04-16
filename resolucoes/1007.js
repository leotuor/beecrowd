var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let A = Number(lines.shift());
let B = Number(lines.shift());
let C = Number(lines.shift());
let MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;
console.log(`MEDIA = ${MEDIA.toFixed(5)}`);