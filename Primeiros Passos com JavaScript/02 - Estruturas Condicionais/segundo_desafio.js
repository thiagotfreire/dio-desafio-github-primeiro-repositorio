/* 
Faça um programa para calcular o valor de uma viagem

Terei 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no carro;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem
*/

const precoEtanol = 3.87;
const precoGasolina = 5.63;
const tipoCombustivelCarro = 'Gasolina';
const gasolinaKmPorLitros = 10;
const etanolKmPorLitros = 8;
const distanciaEmKm = 100;

const gasolinaGastoMedioPorKm = gasolinaKmPorLitros / precoGasolina;
const gasolinaGastoTotal = gasolinaGastoMedioPorKm * distanciaEmKm;

const etanolGastoMedioPorKm = etanolKmPorLitros / precoEtanol;
const etanolGastoTotal = etanolGastoMedioPorKm * distanciaEmKm;

if (tipoCombustivelCarro === 'Etanol') {
    console.log(gasolinaGastoTotal.toFixed(2));
} else {
    console.log(etanolGastoTotal.toFixed(2));
}