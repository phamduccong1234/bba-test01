let playerName = "Mario";
let currentLives = 3;
const coins = {
  level1: 25,
  level2: 30,
  level3: 45,
};
let sum = 0;
for (const coin in coins) {
  sum += coins[coin];
}
let avg = sum / 3;
console.log(sum);
console.log(avg);
let coinLeft = sum % 3;
console.log(coinLeft);
