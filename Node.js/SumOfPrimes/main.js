function sum(limit) {
  let sum = 0;
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) {
      sum = sum + i;
    }
  }
  return sum;
}

function isPrime(n) {
  let max = Math.sqrt(n);
  for (let i = 2; i <= max; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(sum(2000000));

sum(2000000);
