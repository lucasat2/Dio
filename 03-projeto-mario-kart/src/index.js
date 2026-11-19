// PERSONAGENS

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

//Rolar o dado ( + 1 é para não parar em 0)
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Escolher entre RETA, CURVA OU CONFRONTO
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

    //rolar os dados
  let diceResult1 = await rollDice();
  let diceResult2 = await rollDice();

  //teste de habilidade
  let totalTestSkill1 = 0;
  let totalTestSkill2 = 0;

  if (block === "RETA") {
    totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
    totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

    await logRollResult(
      character1.NOME,
      "velocidade",
      diceResult1,
      character1.VELOCIDADE
    )
    
    await logRollResult(
      character2.NOME,
      "velocidade",
      diceResult2,
      character2.VELOCIDADE
    )
  }

  if (block === "CURVA") {
    totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
    totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

    
    await logRollResult(
      character1.NOME,
      "manobrabilidade",
      diceResult1,
      character1.MANOBRABILIDADE
    )
    
    await logRollResult(
      character2.NOME,
      "manobrabilidade",
      diceResult2,
      character2.MANOBRABILIDADE
    )
  }

  if (block === "CONFRONTO") {
    let powerResult1 = diceResult1 + character1.PODER;
    let powerResult2 = diceResult1 + character1.PODER;

    console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`)
      
    await logRollResult(
      character1.NOME,
      "poder",
      diceResult1,
      character1.PODER
    );
    
    await logRollResult(
      character2.NOME,
      "poder",
      diceResult2,
      character2.PODER
    );

    // regra para perder pontos...
   

    if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
      console.log(
        `${character1.NOME} venceu o confronto! 
         ${character2.NOME} perdeu 1 ponto 🐢`)
      
      character2.PONTOS--;
     }

    if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
      console.log(
        `${character2.NOME} venceu o confronto!
         ${character1.NOME} perdeu um ponto!`
        
       )
      character1.PONTOS--;
     }

  
   
    console.log(powerResult1 === powerResult2 ? "Confronto empatado": "")

    }

    // regra para marcar pontos...
    
  if (totalTestSkill1 > totalTestSkill2) {
    console.log(`${character1.NOME} marcou um ponto!`)            
    character1.PONTOS ++
  } else if (totalTestSkill2 > totalTestSkill1) {
    console.log(`${character2.NOME} marcou um ponto!`)
    character2.PONTOS ++
    }
    
    console.log("_______________________________________")
  }

}

//FUNCAO PRINCIPAL PRA COMEÇAR O JOGO
(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`,
  );

  await playRaceEngine(player1, player2);
})();
