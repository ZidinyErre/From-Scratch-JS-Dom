// Rappel des types de données
let string = "chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]); donne le d de bordeaux

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];

// console.log(array2[3][1]);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

objet.adresse = "22 rue du code"; // ajoute adress
objet.age = "22 rue du code "; // change l'index age

// console.log(objet);
// console.log(objet.technos[0][3]);
// console.log(objet.technos[0][3]);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];

// console.log(data[2]);

// ------------------------------
// Lest structures de controle
// ------------------------------
if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// Différentes façon écrire if
// if (valeur à tester) valeur si vrai

// if (valeur à tester)
//  valeur si vrai
// else
// valeur si faux

// valeur à tester ? si vrai : si faux

//  While
let w = 0;

while (w < 10) {
  w++;
  // console.log("La valeur de w est de :" + w);
}

// Do While
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

//  Les boucles for
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// on déclare la valeur de i / jusqu'ou on boucle / incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>"
}

document.body.addEventListener("click", (e) => {
  console.log(e.target.id);
  //   Nous permet de pas répéter les if
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "rgb(173,216,230)";
      break;
    default:
      null;
  }
});

// Méthodes String
let string2 = "Javascript est un langage orienté objet";

// console.log(eval(parseInt("1") + 2));
// console.log(typeof parseInt("42") + typeof "42");
// console.log(isNaN(string)); // est ce que c'est un nombre ?
// console.log(string2.length);
// console.log(string2[string2.length - 1]); Pas bien compris

// console.log(string2.indexOf("x")); Retourne -1 si il ne le connait pas

// let newString = string2.slice(5, 17);
// console.log(newString);

// console.log(string2.split("i"));

// console.log(string2.toUpperCase()); //(string2.toLowerCase())

// console.log(string2.replace("Javascript", "PHP"));

//---------------------------------------------------------
//Méthodes Numbers
//---------------------------------------------------------

let number2 = 42.1234;
let numberString = "42.12 est un chiffre ";

// console.log(number2.toFixed(1));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// Math

// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));

// console.log(Math.floor(Math.random() * 50)); la plus importantes

//---------------------------------------------------------
//Méthodes Arrays
//---------------------------------------------------------
let array3 = ["Javascript", "PHP", "Python"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4);

// let newArray = [...array3, ...array4];
// console.log(newArray);
// console.log(array3.join(" ---"));

// console.log(array3.slice(1));
// console.log(newArray.slice(3, 5));

// console.log(array3.indexOf("Python"));
// array3.forEach((languages) => console.log(languages));
// console.log(array3.every((languages) => languages  === "Php"));
// console.log(array3.some((languages) => languages  === "PHP"));

// let shift = array3.shift();
// console.log(array3);

// console.log(array3.pop());

// const restArray = array3.splice(1, 1, "C++");
// console.log(array3); splice en gros c'est du t'enlève et tu rajoute
// const restArray = array3.splice(0, 2, ...array4);
// console.log(array3);

// IMPORTANT //

let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y)=> x + y));
// arrayNumber.push("Coucou");
// console.log(arrayNumber);

//  FILTER , SORT, MAP
// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort()); range selon le premier index c'est pour ça que 12 est avant 4

// console.log(arrayNumber.sort((a, b) => b - a));  Range dans l'ordre numérique inverse dans ce cas

// document.body.innerHTML = arrayNumber.map((number) =>  `<li> ${number} </li>`).join("");

//---------------------------------------------------------
//Méthodes Objects
//---------------------------------------------------------

// document.body.innerHTML = data
//   // .filter((user) => user.admin === false)
//   .filter((user) => user.pseudo.includes("a"))
//   .sort((a, b) => b.age - a.age)
//   .map(
//     (user) => ` <div class = "user-card"> 
//   <h2> ${user.pseudo} </h2>
//   <p>Age : ${user.age} ans </p>
//   <p>Status : ${user.admin ? "Modérateur" : "Membre"}  </p>
// </div>`
//   )
//   .join(" ");

//---------------------------------------------------------
//Les dates
//---------------------------------------------------------

//Date classique
let date = new Date();

// Timestamp : nombre de seconde entre 1970 et aujourd'hui
let timestamp = Date.parse(date);
// console.log(timestamp);

// IsoString
let iso = date.toISOString();

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric" ,
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  })
  return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timestamp));

//---------------------------------------------------------
//Destructuring
//---------------------------------------------------------

let moreData = {
  detsVar: ["Element 1", "Element 2"],
};

const { detsVar } = moreData ;

// console.log(moreData.detsVar);
// console.log(detsVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;
// console.log(x);
// console.log(y);
// console.log(z);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d,] = newDate.split("-");
  return[d, m, y].join("/");

}
console.log(dateDestructuring(iso) );

//---------------------------------------------------------
// Les Datasets
//---------------------------------------------------------
