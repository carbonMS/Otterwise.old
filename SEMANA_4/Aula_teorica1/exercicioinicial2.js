// 2. Troque todas as vírgulas na string abaixo por ponto final:
// “Olá, mundo, meu, nome, é, Juca”

let str = 'Olá, mundo, meu, nome, é, Juca'

const text = 'Olá, mundo, meu, nome, é, Juca'
const newText = text.replace(/,/g, '.')
console.log(newText)
