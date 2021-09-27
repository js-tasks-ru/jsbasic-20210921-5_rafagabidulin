function factorial(n) {
  let num = 1;
  for(i = 2; i <= n; i++) {
    num = num * i;
  }
  return num;
}
