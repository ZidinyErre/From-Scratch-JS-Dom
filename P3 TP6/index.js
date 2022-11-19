// Créer un form pour taper les todos dans le html

//Ajouter sur le dom ce qui est tapé dans l'input à la validation du form
// monInput.value

// Supprimer un todo lorsque l'on click dessus (.remove())

// Stocker dans le local storage la liste

// Consulter le local storage au lancement de l'application pour rajouter les todos

const monInput = document.getElementById("todo");
// const container = document.querySelector(".container");
const form = document.querySelector(".myForm");

console.log(form);

monInput.addEventListener("keypress", (e) => {
  console.log(e.key  + "2");
  // let data = [];
  if (e.key === "Enter") {
    e.preventDefault();
  // console.log(monInput.value);
    document.body.innerHTML += `<span> ${monInput.value} </span>`
  }
  
});



// if (e.code === "Enter") {
//   e.preventDefault();
// let formData = new FormData(this);
// let input = formData.get(monInput);

// console.log(input);

//   // container.innerHTML += `<span> ${e.code} </span>`
// }