// Créer un form pour taper les todos dans le html

//Ajouter sur le dom ce qui est tapé dans l'input à la validation du form
// monInput.value

// Supprimer un todo lorsque l'on click dessus (.remove())

// Stocker dans le local storage la liste

// Consulter le local storage au lancement de l'application pour rajouter les todos

const monInput = document.getElementById("todo");
const container = document.querySelector(".container");

monInput.addEventListener("keypress", (e) => {
  console.log(e );
//   if (e.code === "Enter") {
//     e.preventDefault();
//     container.innerHTML += `<span> ${e.code} </span>`
//   }
});

console.log(monInput.value);
