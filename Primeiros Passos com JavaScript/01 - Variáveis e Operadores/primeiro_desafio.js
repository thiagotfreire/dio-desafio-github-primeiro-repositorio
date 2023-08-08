/* 
Faça um programa para calcular o valor de uma viagem

Terei 3 variáveis. Sendo elas
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem
*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 1000;

const precoCombustivelPorKm = precoCombustivel / kmPorLitros;
const gastoTotal = precoCombustivelPorKm * distanciaEmKm;

console.log(gastoTotal.toFixed(1));

let precoCombustivel2 = 5.79;
let gastoMedioPorKm2 = 1;
let distanciaEmKm2 = 100;

distanciaEmKm2 = 1580;

let litrosConsumidos = distanciaEmKm2 / gastoMedioPorKm2;
let valorGasto = litrosConsumidos * precoCombustivel2;

console.log(valorGasto.toFixed(3));