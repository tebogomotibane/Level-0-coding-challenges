function getArea(length1, length2, length3) {
  let semiperimeter = (length1 + length2 + length3) / 2;
  let s = semiperimeter;
  let area = Math.sqrt(s * (s - length1) * (s - length2) * (s - length3));
  return area;
}
