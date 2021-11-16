// 07 - Tendo como informação os três lados de um triângulo faça um programa
// que imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.
// OBS: Triângulo Equilátero → Possui os 3 lados iguais;
// Triângulo Isósceles → Possui 2 lados iguais;
// Triângulo Escaleno → Possui 3 lados diferentes.
// Os valores de entrada serão:
// Lado 1;
// Lado 2;
// Lado 3.
// Exemplo de Entrada:
// 10
// 5
// 10
// -----------------
// 2
// 1
// 5
// Exemplo de Saída:
// Triângulo Isósceles
// -----------------
// Triângulo Escaleno

let firstSide = 10;
let secondSide = 10;
let thirdSide = 10;

if (
  firstSide !== secondSide &&
  firstSide !== thirdSide &&
  secondSide !== thirdSide
) {
  console.log("Triangulo Escaleno");
} else if (firstSide === secondSide && thirdSide === firstSide) {
  console.log("Triangulo Equilátero");
} else {
  console.log("Triangulo Isósceles");
}
