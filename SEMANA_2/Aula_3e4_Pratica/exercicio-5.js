// 5 - Crie um algoritmo que tem como entrada um número e imprime a sua
// tabuada do 1 ao 10.

function multiply(number) {
  let numTable = "";
  for (index = 1; index <= 10; index++) {
    numTable = `${numTable} \n${index} x ${number} = ${index * number}\n`;
  }
  return numTable;
}
console.log(multiply(4));
