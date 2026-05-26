function createCharacters() {
  const characters = [
    { name: "Mario", level: 50, health: 800 },
    { name: "Luigi", level: 40, health: 500 },
    { name: "Peach", level: 20, health: 150 },
  ];
  const charactersPowerUp = characters.map((character) => {
    return {
      name: character.name.toUpperCase(),
      level: character.level * 2,
      health: character.health * 3,
    };
  });
  const possibleWinners = charactersPowerUp.filter((character) => {
    return character.health > 1000;
  });

  console.log(charactersPowerUp);
  console.log(possibleWinners);
}

createCharacters();

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
