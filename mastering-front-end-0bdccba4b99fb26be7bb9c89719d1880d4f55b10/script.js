// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navbar = document.querySelector("nav");
const image = document.querySelector("#imgImprovise");
const popup = document.querySelector(".pop-up");

console.log(popup);

window.addEventListener("scroll", () => {

  if (window.scrollY > 200) {
    navbar.style.height = "55px";
  }
  if (window.scrollY < 142) {
    navbar.style.height = "90px";
  }
  if (window.scrollY > 350) {
    image.style.opacity = 1;
    image.style.transform = "none";
  }
  if (window.scrollY >= 1632){
    popup.style.opacity = 1;
    popup.style.transform = "none";
  }
});
