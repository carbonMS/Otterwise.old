// Crie um algoritmo que tem como entrada um array de números e imprime no console a soma dos
// elementos sendo cada um deles multiplicado pelo seu índice.
// 	Exemplo entrada: [5, 9, 10, 6]
// 	Exemplo Saída: 47

let myArray = [5, 10, 10, 6];
let add = 0;

for (let index = 0; index < myArray.length; index++) {
  add = myArray[index] * index + add;
}

console.log(myArray);
console.log(add);
//5 * 0 + 9 * 1 etc
