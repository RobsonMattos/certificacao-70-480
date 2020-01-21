function Carro(marca, modelo, ano, dono) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
}

function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

var dono = new Pessoa('Robson', 51, 'M');

var meucarro = new Carro("Eagle", "Talon TSi", 1993, dono);

console.log(meucarro);