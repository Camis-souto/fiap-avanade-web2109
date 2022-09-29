//trabalhando com JavaScript em um arquivo externo.
const nome = "Fiap"
console.log(nome, 'chamando variável criada com var');
//nome = "Avanade";

escreve("Exemplo de função nominal")

//função nominal - udf
function escreve(titulo) {
    //alert(titulo);
}

//7 tipos diferentes de erros em JavaScript - 3 são os mais comuns.S
// 1 - SyntaxError - escreveu algo errado.
// 2 - ReferenceError - chamou alguma função que não existe.
// 3 - TypeError - foi violado alguma regra do JavaScript.
// 4 - RangeError - estourou o limite de aninhamento ou faixa de valores.
// 5 - EvalError - existe um comando perigoso no JavaScript chamado eval.
// 6 - InternalError - memória, processamento, crash no chrome ou v8.
// 7 - URIError - erros que acontecem ao consumir dados externos com url inválidos


//existem 4 formas de criar uma função em JavaScript

//função nominal - sofre hoisting. (é içada para cima do código)
function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo;
};
//escopo, orientação a objetos.
mudaTitulo("Vc consegue!"); 

//expressão de função - function Expression 
//função anônima
const mudaTitulo2 = function(novoTitulo) {
    document.querySelector("h2").innerHTML = novoTitulo;
};
mudaTitulo2("trocando o subtitulo");
//arrow Function - é uma função criada no ES6 ou ES2015
//não existe o this dentro de uma arrow function.
//não existe um método construtor.
//sintaxe mais simples e prática.

const relogio = ()=>{
    const date = new Date();
    mudaTitulo2(date.toLocaleTimeString());
};
setInterval(relogio, 1000);