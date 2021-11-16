// 7 - Dado um array de números, mostre quantos valores são pares, quantos são
// ímpares, quantos são positivos e quantos são negativos.
// Exemplo de Entrada:
// [-5,0,-3,-4,12]
// Exemplo de Saída:
// 3 valor(es) par(es)
// 2 valor(es) impar(es)
// 1 valor(es) positivo(s)
// 3 valor(es) negativo(s)

// let imparNumbers = "";
//   let positiveNumbers = "";
//   let negativeNumbers = "";

myArray = [-5, 0, -3, -4, 12];

let resultPar = 0;
function showNumbers() {
  let parNumbers = "";

  for (let index = 0; index < myArray.length; index++) {
    const result = myArray[index];

    let par = myArray[index] % 2 === 0;
    parNumbers = `${parNumbers} \n${par}  valor(es) par(es)\n`;
  }
  return parNumbers;
}

console.log(showNumbers());
