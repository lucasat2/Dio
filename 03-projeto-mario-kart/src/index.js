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
    return Math.floor(Math.random() * 6) + 1; // + 1 é para o dado não começar em 0.
}

async function getRandomBlock() {
  let ramdom = Math.ramdom()
  let result 

  switch (true) {
    case ramdom < 0.33:
      result = "RETA"
      break;
    case ramdom < 0.66:
      result = "CURVA"
      break;
    default:
      result = "CONFRONTO"
      break;
  }
  ]
  return result;
  
}

async function playRaceEngine(character1, character2) {
  // percorrer 5  rodadas
  
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁Iniciando rodada ${round}`);

    //sortear bloco

    let block = await getRandomBlock

  }
}

(async function main() {
    console.log(
        `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);
    
    await playRaceEngine(player1, player2);

})();

