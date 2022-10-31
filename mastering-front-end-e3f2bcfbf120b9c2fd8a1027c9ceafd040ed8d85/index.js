// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

const sideBar = document.getElementById("side-bar");
const content = document.querySelector(".content");

console.log(content);
//  Dans la correction le toggle marche pas car le professeur crée une class qu'il ne lie pas a l'id il doit donc mettre !important a la classe pour qu'il passe devant l'id. Autant pour moi il utilise la même technique.
btn.addEventListener("click", () => {
    // sideBar.classList.add("sid");
    sideBar.classList.toggle("sid");
    // sideBar.style.left = "0px";
});

content.addEventListener("click", () => {
    sideBar.classList.remove("sid");

    // if (sideBar.style.left = "0px") {
    //     // sideBar.style.left = "-230px";
    // }
})