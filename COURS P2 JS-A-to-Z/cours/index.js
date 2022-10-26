// document.querySelector('h4').style.background = "yellow";


const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

console.log(questionContainer);
console.log(btn1);
console.log(btn2);

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  // response.style.visibility = "visible";
  // response.style.opacity = "1";
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  // response.style.visibility = "visible";
  // response.style.opacity = "1";
  response.style.background = "red";
});

//---------------------------------------------------------
// Mouse EVENTS
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, 25%)";

});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, 50%)";
  mousemove.style.border = "2px solid teal";

});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//----------------------------------------------------
// KeyPress event  

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

Audio 
const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h" ){
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  
  ring();
});
//------------------------------------------------------
// Scroll Event

const nav  = document.querySelector("nav");


window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});
//------------------------------------------------------
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

console.log(form);
inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked){
    document.querySelector("form > div").innerHTML = `
      <h3> Pseudo : ${pseudo}</h3>
      <h4> Langage : ${language}</h4>
    `;
  }else{
    alert("Veuillez accepter les CGV");
  }
});

//-------------------------------------------------------
// Load event
window.addEventListener("load", () => {
  console.log("Document Chargé !");
});

//--------------------------------------------------------
// ForEach
// const boxes = document.getElementsByClassName(".box");
const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.style.transform = "scale(0.7)";
  });
});

//--------------------------------------------------------
// addEventListener Vs onclick

// On peut pas avoir deux méthodes onclik le dernier prends de le dessus sur l'autre !!

// document.body.onclick = () => {
//   console.log("Click !");
// };

// document.body.onclick = () => {
//   console.log("Scroll !");
// };

// Bubbling
document.body.addEventListener("click", () => {
  console.log("click 1!");
});
// Usecapture
document.body.addEventListener("click", () => {
  console.log("click 2!");
}, true
);
//--------------------------------------------------------
// Stop propagation

//  Je l'ai pas bien maitrisé
// questionContainer.addEventListener("click", (e) =>{
//   alert("Test !");
//   e.stopPropagation();
// });

// removeEventListener
//--------------------------------------------------------
// BOM
// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("http://google.com", "cours js" , "height = 600, width = 800");
// window.close();

// Evénement adossés à Window
// alert("hello");

// confirm
btn2.addEventListener("click", () =>{
  confirm("Voulez vous vraiment vous tromper ?");
});

let answer;
// prompt
btn1.addEventListener("click", () =>{
  answer = prompt("Entrez votre Nom!");

  // questionContainer.innerHTML = "<h3>Bravo" + " " +answer +"</h3>"
  questionContainer.innerHTML += "<h3>Bravo" + " " +answer +"</h3>"
});

setTimeout(() => {
  //  logique à éxécuter
  questionContainer.style.borderRadius = "300px";
}, 2000);

let interval = setInterval(()=> {
  document.body.innerHTML += `<div class = 'box'>
      <h2> Nouvelle Boite ! </h2>
    </div>`;
}, 1000);

document.body.addEventListener("click", (e) => {
  // e.target.remove();
  clearInterval(interval);
});

// location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// onload fait la même chose que location replace ici

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };