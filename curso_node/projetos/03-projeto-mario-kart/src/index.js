
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

// CONFIGURAÇÕES DO JOGO

const CHANCE_TURBO = 0.5; // 50% de chance de ganhar turbo

// ROLAR O DADO

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// ESCOLHER ENTRE RETA, CURVA OU CONFRONTO

function getRandomBlock() {
  const blocks = ["RETA", "CURVA", "CONFRONTO"];

  return blocks[Math.floor(Math.random() * blocks.length)];
}

// SORTEAR ITEM: CASCO OU BOMBA

function getRandomItem() {
  const items = [
    { NOME: "CASCO 🐢", PENALIDADE: 1 },
    { NOME: "BOMBA 💣", PENALIDADE: 2 },
  ];

  return items[Math.floor(Math.random() * items.length)];
}

// EXIBIR RESULTADO DOS DADOS

function logRollResult(character, attribute, diceResult) {
  const skill = character[attribute];
  const total = diceResult + skill;

  console.log(
    `${character.NOME} 🎲 rolou um dado de ${attribute.toLowerCase()} ${diceResult} + ${skill} = ${total}`
  );

  return total;
}

// APLICAR PENALIDADE DO ITEM

function applyItemPenalty(character) {
  const item = getRandomItem();

  const pontosAntes = character.PONTOS;

  character.PONTOS = Math.max(
    0,
    character.PONTOS - item.PENALIDADE
  );

  const pontosPerdidos = pontosAntes - character.PONTOS;

  console.log(
    `${character.NOME} recebeu ${item.NOME}!`
  );

  if (pontosPerdidos > 0) {
    console.log(
      `${character.NOME} perdeu ${pontosPerdidos} ponto(s)!`
    );
  } else {
    console.log(
      `${character.NOME} não tinha pontos para perder!`
    );
  }
}

// SORTEAR TURBO PARA O VENCEDOR

function awardTurbo(character) {
  const ganhouTurbo = Math.random() < CHANCE_TURBO;

  if (ganhouTurbo) {
    character.PONTOS++;

    console.log(
      `${character.NOME} 🚀 ganhou um TURBO e recebeu +1 ponto!`
    );
  } else {
    console.log(
      `${character.NOME} não conseguiu um turbo desta vez!`
    );
  }
}

// DISPUTA DE CONFRONTO

function playConfrontation(character1, character2) {
  console.log(
    `${character1.NOME} confrontou com ${character2.NOME}! 🥊`
  );

  const diceResult1 = rollDice();
  const diceResult2 = rollDice();

  const powerResult1 = logRollResult(
    character1,
    "PODER",
    diceResult1
  );

  const powerResult2 = logRollResult(
    character2,
    "PODER",
    diceResult2
  );

  if (powerResult1 > powerResult2) {
    console.log(`${character1.NOME} venceu o confronto! 🏆`);

    // O perdedor recebe um item aleatório
    applyItemPenalty(character2);

    // O vencedor pode ganhar um turbo
    awardTurbo(character1);

  } else if (powerResult2 > powerResult1) {
    console.log(`${character2.NOME} venceu o confronto! 🏆`);

    // O perdedor recebe um item aleatório
    applyItemPenalty(character1);

    // O vencedor pode ganhar um turbo
    awardTurbo(character2);

  } else {
    console.log("Confronto empatado! Ninguém perdeu pontos.");
  }
}

// DISPUTA DE RETA OU CURVA

function playSkillBlock(character1, character2, block) {
  const attribute =
    block === "RETA" ? "VELOCIDADE" : "MANOBRABILIDADE";

  const diceResult1 = rollDice();
  const diceResult2 = rollDice();

  const total1 = logRollResult(
    character1,
    attribute,
    diceResult1
  );

  const total2 = logRollResult(
    character2,
    attribute,
    diceResult2
  );

  if (total1 > total2) {
    character1.PONTOS++;

    console.log(`${character1.NOME} marcou um ponto! 🏁`);

  } else if (total2 > total1) {
    character2.PONTOS++;

    console.log(`${character2.NOME} marcou um ponto! 🏁`);

  } else {
    console.log("Rodada empatada! Ninguém marcou ponto.");
  }
}

// MOTOR PRINCIPAL DA CORRIDA

function playRaceEngine(character1, character2) {

  // Percorrer 5 rodadas
  for (let round = 1; round <= 5; round++) {

    console.log(`\n🏁 Iniciando rodada ${round}`);

    // Sortear bloco
    const block = getRandomBlock();

    console.log(`Bloco: ${block}`);

    // Identificar tipo de disputa
    if (block === "CONFRONTO") {

      playConfrontation(character1, character2);

    } else {

      playSkillBlock(character1, character2, block);

    }

    console.log("---------------------------------------");
  }
}

// DECLARAR VENCEDOR

function declareWinner(character1, character2) {

  console.log("\n🏆 RESULTADO FINAL:");

  console.log(
    `${character1.NOME}: ${character1.PONTOS} ponto(s)`
  );

  console.log(
    `${character2.NOME}: ${character2.PONTOS} ponto(s)`
  );

  if (character1.PONTOS > character2.PONTOS) {

    console.log(
      `\n🏆 ${character1.NOME} venceu a corrida! Parabéns!`
    );

  } else if (character2.PONTOS > character1.PONTOS) {

    console.log(
      `\n🏆 ${character2.NOME} venceu a corrida! Parabéns!`
    );

  } else {

    console.log("\n🏁 A corrida terminou em empate!");

  }
}

// FUNÇÃO PRINCIPAL

function main() {

  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando!\n`
  );

  playRaceEngine(player1, player2);

  declareWinner(player1, player2);
}

main();
