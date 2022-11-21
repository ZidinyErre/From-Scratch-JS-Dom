// Créer un form pour taper les todos dans le html

//Ajouter sur le dom ce qui est tapé dans l'input à la validation du form
// monInput.value

// Supprimer un todo lorsque l'on click dessus (.remove())

// Stocker dans le local storage la liste

// Consulter le local storage au lancement de l'application pour rajouter les todos

// const monInput = document.getElementById("todo");
// // const container = document.querySelector(".container");
// const form = document.querySelector(".myForm");

// console.log(form);

// monInput.addEventListener("keypress", (e) => {
//   console.log(e.key  + "2");
//   // let data = [];
//   if (e.key === "Enter") {
//     e.preventDefault();
//   // console.log(monInput.value);
//     document.body.innerHTML += `<span> ${monInput.value} </span>`
//   }
  
// });

const form = document.querySelector("form");

// storage part
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;

  } else {
    list.innerHTML = `<li> Cliquez sur un todo pour le supprimer </li>`;
  }
}

window.addEventListener("load", getTodos);
// getTodos();

form.addEventListener("submit", (e) => {
e.preventDefault();

list.innerHTML += `<li>${item.value}</li>`;
item.value = "";
storeList();
});

list.addEventListener("click", (e) =>{
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");

  };
  storeList();
});


