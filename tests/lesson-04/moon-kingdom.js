function createCharacters() {
  const characters = [
    { name: "Mario", level: 50, health: 800 },
    { name: "Luigi", level: 40, health: 500 },
    { name: "Peach", level: 20, health: 150 },
  ];
  let charactersPowerUp = characters.map((character) => {
    name: character.name.toUpperCase();
    level: character.level * 2;
    health: character.health * 3;
  });
  let possibleWinners = charactersPowerUp.filter(
    (character) => character.health > 1000,
  );
}

const players = [
  { name: "Mario", score: 1000 },
  { name: "Luigi", score: 900 },
  { name: "Peach", score: 850 },
  { name: "Yoshi", score: 800 },
  { name: "Phong", score: 500 },
];
function printLeaderboard(players) {
  players.sort((a, b) => b.score - a.score);
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (i === 0) {
      console.log(`🥇 ${i + 1}. ${player.name} - ${player.score} pts`);
    } else if (i === 1) {
      console.log(`🥈 ${i + 1}. ${player.name} - ${player.score} pts`);
    } else if (i === 2) {
      console.log(`🥉 ${i + 1}. ${player.name} - ${player.score} pts`);
    } else {
      console.log(`   ${i + 1}. ${player.name} - ${player.score} pts`);
    }
  }
  return players;
}
console.log(printLeaderboard(players));
