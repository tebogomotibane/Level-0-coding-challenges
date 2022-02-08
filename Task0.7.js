function convertToFahrenheit(celcius) {
  let fanhre = celcius * 1.8 + 32;
  return fanhre;
}
function convertToCelcius(fanhre) {
  let celcius = (fanhre - 32) * 0.5556;
  return celcius.toFixed(2); //rounds to 2 decimal places
}
