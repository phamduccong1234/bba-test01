let count = 0;
function findPairsDivisibleBy17() {
  for (let i = 1; i < 100; i++) {
    for (let j = 1; j < 100; j++) {
      if ((i + j) % 17 === 0) {
        console.log(`Pair: ${i} + ${j} = ${i + j}`);
        count++;
      }
    }
  }
  return count;
}
console.log(findPairsDivisibleBy17());
console.log(`Total pair count: ${count}`);
