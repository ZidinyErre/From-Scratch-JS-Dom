// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navbar = document.querySelector("nav");
const image = document.querySelector("#imgImprovise");
const popup = document.querySelector(".pop-up");
let playOnce = true ;

console.log(popup);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navbar.style.height = "55px";
  }
  // T'aurais pu faire un else ici
  if (window.scrollY < 142) {
    navbar.style.height = "90px";
  }
  // Pas tout a fait vrai car la height change selon les tailles d'écran !!
  // if (window.scrollY > 350) {
  //   image.style.opacity = 1;
  //   image.style.transform = "none";
  // }

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.45) {
    image.style.opacity = 1;
    image.style.transform = "none";
  }
  
  // Même choses 
  // if (window.scrollY >= 1632) {
    if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";

});