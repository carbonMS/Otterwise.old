// 8 - Escreva um programa que tenham como entrada um valor. Este valor é a
// quantidade de linhas de saída que serão apresentadas na execução do
// programa.
// Exemplo de Entrada:
// 7
// Exemplo de Saída:
// 1 2 3 PUM
// 5 6 7 PUM
// 9 10 11 PUM
// 13 14 15 PUM
// 17 18 19 PUM
// 21 22 23 PUM
// 25 26 27 PUM

let lineAmmount = 7
let lines = ''
const createLines = (numbers) => {
  for (let i = 1; i <= numbers * 4; i++) {
    if (i % 4 === 0) {
      lines = lines + 'PUM'
      console.log(lines)
      lines = ''
    } else {
      lines = lines + i + ' '
    }
  }
}

createLines(lineAmmount)
