const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function getRandomBlock() {
  const random = Math.random();

  switch (true) {
    case random < 0.33:
      return "RETA";
    case random < 0.66:
      return "CURVA";
    default:
      return "CONFRONTO";
  }
}

// FUNCAO GENERICA PARA ser chamada nos ifs para evitar repetir console.log em todos eles 

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);

}

async function playRaceEngine(character1, character2) {
  // Percorrer 5 rodadas
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Iniciando rodada ${round}`);

    // Sortear bloco
    const block = getRandomBlock();
    console.log(`Bloco: ${block}`);
  }

   
}

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`,
  );

  await playRaceEngine(player1, player2);
})();
