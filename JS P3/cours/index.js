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
