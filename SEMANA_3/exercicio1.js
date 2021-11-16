// crie uma função que recebe uma string (com 4 possibilidades: 'soma', 'subtrai', 'divide', 'multiplica')
// e dois numeros. A função deve retornar a operação realizada informada pela string nos dois numeros

// exemplo de entrada:
// myFunction ('soma')(3)(6)

// exemplo saida:
// 8
const dic = {
  add: 'soma',
  multiply: 'multiplicar',
  divide: 'dividir',
  subtract: 'subtrair',
}

const operations = function (operation) {
  switch (operation) {
    case 'soma':
      return (numberOne) => (numberTwo) => numberOne + numberTwo
    case 'subtrair':
      return (numberOne) => (numberTwo) => numberOne - numberTwo
    case 'dividir':
      return (numberOne) => (numberTwo) => numberOne / numberTwo
    case 'multiplicar':
      return (numberOne) => (numberTwo) => numberOne * numberTwo

    default:
      break
  }
}

console.log(operations('dividir')(10)(20))
