
// CRIACAO DA CLASSE 

class Heroi {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }

  // METODO DA CLASSE

  atacar() {
    if (this.tipo === 'mago') {
      return `O ${this.tipo} de nome ${this.nome} atacou usando "magia"`;
    } else if (this.tipo === 'guerreiro') {
      return `O ${this.tipo} de nome ${this.nome} atacou usando "espada"`;
    } else if (this.tipo === 'monge') {
      return `O ${this.tipo} de nome ${this.nome} atacou usando "artes marciais"`;
    } else {
      return `O ${this.tipo} de nome ${this.nome} atacou usando "shuriken"`;
    }
  }
}

// Instanciando objeto 
const guerreiro = new Heroi('Lucas', 'guerreiro');
const mago = new Heroi('Ramiro', 'mago');
const monge = new Heroi('Afranio', 'monge');
const ninja = new Heroi('Tobias', 'ninja');

console.log(guerreiro.atacar());
console.log(mago.atacar());
console.log(monge.atacar());
console.log(ninja.atacar());
