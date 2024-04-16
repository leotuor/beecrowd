const { get } = require('http');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const pegarValores = (linha) => linha.split(" ").map((item));

getTitans = pegarValores(lines.shift());
getTitans = getTitans.map((i) => Number(i));
let quantTitans = getTitans[0];
let tamMuralhas = getTitans[1];
let categoriaTitans = pegarValores(lines.shift());
let getSize = pegarValores(lines.shift());
getSize = getSize.map((i) => Number(i));
let p = getSize[0];
let m = getSize[1];
let g = getSize[2];
