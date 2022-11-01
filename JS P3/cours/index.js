// Rappel des types de données
let string = "chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]); donne le d de bordeaux

let array2 = ["Bordeaux", 24 , true, [1,2], {nom : "Denis"}];

// console.log(array2[3][1]);

let objet = {
    pseudo : "Denis",
    age : 33,
    technos : ["Javascript", "React", "NodeJs"],
    admin : false
};

objet.adresse = "22 rue du code" ;// ajoute adress
objet.age = "22 rue du code " ; // change l'index age 

// console.log(objet);
// console.log(objet.technos[0][3]);
// console.log(objet.technos[0][3]);

let data = [
    {
        pseudo : "Denis",
        age : 33,
        technos : ["Javascript", "React", "NodeJs"],
        admin : false
    },
    {
        pseudo : "Samia",
        age : 24,
        technos : ["CSS", "React", "NodeJs"],
        admin : false
    },
    {
        pseudo : "Nikola",
        age : 42,
        technos : ["Php", "React", "NodeJs"],
        admin : true
    }
];

console.log(data[2]);