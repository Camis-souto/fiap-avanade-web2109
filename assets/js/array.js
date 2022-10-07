const carroDOM = document.querySelector("#carros")

const veiculos = [
    "Chevrolet", 
    "Ford", 
    "Fiat", 
    "Vw",
    "Honda", 
    "Toyota", 
    "Hyundai"
];
//adicione ao final do array
veiculos.push("BMW", "Mercedes");

//adiciona no inicio do array
veiculos.unshift("Audi");

//removendo do inicio do array E RETORNA QUEM REMOVEU
const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemeno do array", primeiro);

//removendo do final do array E RETORNA QUEM REMOVEU
const ultimo = veiculos.pop();
console.log("Removendo o último elemeno do array", ultimo);

//removendo um elemento do array
const posicao = 2;
const removido = veiculos.splice(posicao, 1); // O ULTMO NUMERO É QUANTIDADE, não posição

//removendo mais de um elemento do array
const removidos = veiculos.splice(1, 2); // O ULTMO NUMERO É QUANTIDADE, não posição

//removendo e adicionando elementos
const removidos2 = veiculos.splice(1, 2, "Ferrari", "Lamborghini");

veiculos.forEach((value, key)=>{
    carroDOM.innerHTML += `<option value="${key}">${value}</option>`;
});


//---------------------------------------------------------------------------------------------------------------
//splice - remove e adiciona elementos

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];
//slice - retorna um novo array, o primeiro parâmetro é opcional, e começa em zero.
//o último parametro determina até onde deve ser filtrado, porém excluindo este último elemento

const newNba = nbaTeams.slice(0, 1); // aqui no segundo numero é a posição que termina

console.log(nbaTeams.slice(0, 1)); // slice (-1) sempre traz o ultimo elemento
console.log(newNba);

//slice - retorna um novoa array
//------------------------------------------------------------------------------------

// map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring

// split e join - quebra texto em array, e join transforma array em texto

const name = "Camilla Cristina Lima de Souto";
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" ");
console.log(nameComplete);

//----------------------------------------------------------------------------------------
//map percorre todo o array, é semelhante ao forEach

const procuraCeltic = (nomeTime) => {
   return nomeTime == "Celtics" || nomeTime == "Raptors";
};
const celticsMap = nbaTeams.map(procuraCeltic); //map percorre todo o array e retorna um novo array, com true ou false
const celticsFilter = nbaTeams.filter(procuraCeltic); // filter traz só quem é true, só que retorna a chave. e ele vai fo começo ate o fim
const celticsFind = nbaTeams.find(procuraCeltic); // find pega apenas o primeiro elemento true, e para ali.

console.log(celticsMap, "map");
console.log(celticsFilter, "filter");
console.log(celticsFind, "find");

