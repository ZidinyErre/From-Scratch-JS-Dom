// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navbar = document.querySelector("nav");

console.log(navbar);

window.addEventListener("scroll", () => {
if (window.scrollY > 200  ) {
    navbar.style.height = "55px";
};
// if (condition) {
    
// };
});