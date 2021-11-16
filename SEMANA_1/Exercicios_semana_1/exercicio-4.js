// 04 - Uma imobiliária paga às pessoas corretoras de imóveis um salário fixo por
// mês e uma comissão de acordo com o valor de vendas realizado por elas. Faça
// um programa que calcule e imprima no console o valor total recebido pela
// pessoa corretora de imóveis no mês.

// Os valores de entrada serão:
// Salário Fixo;
// Valor total vendido;
// Porcentagem da comissão.
// Exemplos de Entrada 1:
// 2000
// 30000
// 1
// Exemplos de Entrada 2:
// 5000
// 100000
// 10
// Exemplos de Saída 1:
// Valor Mensal: R$ 2300
// Exemplos de Saída 2:
// Valor Mensal: R$ 15000

let employeeName = "Empregado BomDimais";
let salesCut = 10;
let monthlySalary = 2000;
let totalSold = 100000;
let comissionPercentual = (salesCut / 100) * totalSold;
let finalPay = monthlySalary + comissionPercentual;

console.log(employeeName);
console.log("Salário Fixo: " + monthlySalary);
console.log("Valor Total Vendido: " + totalSold);
console.log("Porcentagem da Comissão: " + salesCut + "%");
console.log("Salário Total: " + finalPay);
