const testIfIsTrue = (test) => {
  if (test) return 'é verdadeiro'
  else {
    return 'é falso'
  }
}
const testIfIsTrue2 = (test) => (test ? 'é verdadeiro' : 'é falso')

console.log(testIfIsTrue2(true))
