function addHigher(valueOne, valueTwo, valueThree) {
  if (valueOne >= valueTwo && valueOne >= valueThree && valueTwo >= valueThree)
    return valueOne + valueTwo;
  else if (
    valueTwo >= valueOne &&
    valueThree >= valueOne &&
    valueTwo >= valueThree
  )
    return valueTwo + valueThree;
  else if (
    valueThree >= valueTwo &&
    valueOne >= valueTwo &&
    valueThree >= valueOne
  )
    return valueThree + valueOne;
  else if (
    valueThree >= valueOne &&
    valueTwo >= valueOne &&
    valueThree >= valueTwo
  )
    return valueThree + valueTwo;
  else if (
    valueTwo >= valueOne &&
    valueTwo >= valueThree &&
    valueOne >= valueThree
  )
    return valueOne + valueTwo;
  else if (
    valueThree >= valueTwo &&
    valueThree >= valueOne &&
    valueOne >= valueTwo
  )
    return valueOne + valueThree;
  else if (
    valueOne >= valueTwo &&
    valueOne >= valueThree &&
    valueThree >= valueTwo
  )
    return valueOne + valueThree;
}

console.log(addHigher(1, 3, 2));
