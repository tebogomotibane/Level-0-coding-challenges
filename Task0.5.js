function getArea(length1, length2, length3) {
  let semiperimeter = (length1 + length2 + length3) / 2;
  const s = semiperimeter;
  const area = Math.sqrt(s * (s - length1) * (s - length2) * (s - length3));
  return area;
}

