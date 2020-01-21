// construa objeto em notação literal

let carro = {
    fabricante: 'Ford',
    ano: 2019,
    modelo: 'Ford KA'
}

console.log(carro);

// construa objeto com função construtora

let Proprietario = function(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

let proprietario = new Proprietario('Caio', 24);
console.log(proprietario);
console.log(proprietario.__proto__);

console.log('--- Herança (é um) ---');
let Pessoa = function(nome) {
    this.nome = nome;
}

let Familia = function(nome, parentesco) {
    Pessoa.call(this, nome);
    this.parentesco = parentesco;
}

let pai = new Familia('Robson', 'pai');
console.log(pai.__proto__);
console.log(this);