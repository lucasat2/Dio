function rankeadas(qtde_vitorias, qtde_derrotas) {
  let nivel = "";
  let saldoVitorias = qtde_vitorias - qtde_derrotas;
  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias <= 50) { 
    nivel = "Prata";
  } else if (saldoVitorias <= 80) { 
    nivel = "Ouro";
  } else if (saldoVitorias <= 90) { 
    nivel = "Diamante";
  } else if (saldoVitorias <= 100) { 
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }
  
console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível ${nivel}`)
}

rankeadas(11, 1);
