function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const arg = process.argv[2];
const num = parseInt(arg, 10);

console.log(factorial(isNaN(num) ? 0 : num));
