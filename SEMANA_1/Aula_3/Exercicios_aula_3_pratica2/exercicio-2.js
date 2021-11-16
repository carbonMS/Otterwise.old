// 02 - Elabore um programa que receba três valores como entrada e mostre eles
// em ordem crescente no console.

function showCrescent(valueOne, valueTwo, valueThree) {
  if (valueOne >= valueTwo && valueOne >= valueThree && valueTwo >= valueThree)
    return valueThree + ", " + valueTwo + ", " + valueOne;
  else if (
    valueTwo >= valueOne &&
    valueThree >= valueOne &&
    valueTwo >= valueThree
  )
    return valueOne + ", " + valueThree + ", " + valueTwo;
  else if (
    valueThree >= valueTwo &&
    valueOne >= valueTwo &&
    valueThree >= valueOne
  )
    return valueTwo + ", " + valueOne + ", " + valueThree;
  else if (
    valueThree >= valueOne &&
    valueTwo >= valueOne &&
    valueThree >= valueTwo
  )
    return valueOne + ", " + valueTwo + ", " + valueThree;
  else if (
    valueTwo >= valueOne &&
    valueTwo >= valueThree &&
    valueOne >= valueThree
  )
    return valueThree + ", " + valueOne + ", " + valueTwo;
  else if (
    valueThree >= valueTwo &&
    valueThree >= valueOne &&
    valueOne >= valueTwo
  )
    return valueTwo + ", " + valueOne + ", " + valueThree;
  else if (
    valueOne >= valueTwo &&
    valueOne >= valueThree &&
    valueThree >= valueTwo
  )
    return valueTwo + ", " + valueThree + ", " + valueOne;
}

console.log(showCrescent(3, 1, 2));
