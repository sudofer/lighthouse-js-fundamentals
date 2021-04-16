function range(start, end, step) {
  let final = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 1) {
    return final;
  }
  for (let i = start; i <= end; i += step) {
    final.push(i);
  } return final;
}
console.log(range(10, 20, 2));

