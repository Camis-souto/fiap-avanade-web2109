//diferenças entre arrow function e funções nominais ou expressões de função.

const resultado = document.querySelector("#resultado");
let myFunc1 = {
    showArgments(){
        resultado.innerHTML = arguments; 
        console.log(arguments);     
    },
};

//chamando a função
myFunc1.showArgments(
    "Você consegue", 
    "Full-Stack Developer", 
    "React", 
    "NodeJS", 
    "TypeScript"
);

//explicar spreas operator, destructuring assignment.
let myFunc2 = {
    showArgments: () => {
       // resultado.innerHTML = arguments; 
        ///console.log(...arguments);     //arrow function não acessa arguments
    },
};
myFunc2.showArgments(
    "Você consegue", 
    "Full-Stack Developer", 
    "React", 
    "NodeJS", 
    "TypeScript"
);

let user = {
    name: "Camilla Souto",
    usandoArrow: ()=>{
        console.log("Meu nome é", this.name, "Arrow Function");
    },
    usandoNominal(){
        console.log("Meu nome é", this.name, "Nominal Function");
    },
};
user.usandoArrow();
user.usandoNominal();

/*
 
{
    "name":"Glaucio Daniel",
    "email":"glauciodaniel@gmail.com",
    "password": "123456"
}

const {password, ...data} = await prisma.user.findById(1);

return data;

 */
