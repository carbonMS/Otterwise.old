// Crie variáveis para armazenar algumas informações de cadastro de um estudante,
//são elas: nome, sobrenome, dia do nascimento, mês do nascimento,
//ano do nascimento, primeira nota e segunda nota. A partir dessas informações,
//você deve mostrar um relatório na tela da seguinte forma: Nome Completo, Idade, Data de Nascimento e Média:

// Exemplo de Saída:
// Nome Completo: Érico Grehs
// Idade: 29
// Data de Nascimento: 11/04/1992
// Média: 8

let name = "Lucas";
let lastName = "Moraes da Silva";
let age = 25;
let dayofBirth = 27;
let monthofBirth = 03;
let yearofBirth = 1996;
let firstGrade = 10;
let secondGrade = 2.5;

console.log("Nome Completo: " + name + " " + lastName);
console.log("Idade: " + (2021 - yearofBirth));
console.log(
  "Data de Nascimento: " + dayofBirth + "/" + monthofBirth + "/" + yearofBirth
);

console.log("Média: " + (firstGrade + secondGrade) / 2);
