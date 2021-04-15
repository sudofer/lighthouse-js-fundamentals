const howManyHundreds = num => {
  let answer = num / 100;
  return Math.trunc(answer);
}
howManyHundreds(1000);