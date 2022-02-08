function getMaximum() {
  let maxNumber = 0;
  for (let value = 0; value < arguments.length; value++) {
    if (arguments[value] > maxNumber) {
      maxNumber = arguments[value];
    }
  }
  return maxNumber;
}
