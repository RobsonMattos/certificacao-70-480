// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos

// Em JavaScript, quase tudo é um objeto. Todos os tipos primitivos - com exceção de null e undefined - são tratados como objetos.

var meuCarro = new Object();
meuCarro.fabricacao = "Ford"; // meuCarro["fabricacao"] = "Ford";
meuCarro.modelo = "Mustang";  // meuCarro["modelo"] = "Mustang";
meuCarro.ano = 1969;          // meuCarro["ano"] = 1969;

console.log(meuCarro.modelo);

// Propriedades de objetos em JavaScript podem também ser acessadas ou alteradas usando-se notação de colchetes. 
// Objetos são às vezes chamados de arrays associativos,
