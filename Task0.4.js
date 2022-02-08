function evenOrOdd(integer) {
  if (isNaN(integer) || Number.isInteger(integer) == false) {
    //validates input
    console.log(undefined);
  } else if (integer % 2 == 0) {
    console.log("even");
  } else if (integer % 2 != 0) {
    console.log("odd");
  }
}
