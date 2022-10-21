// document.querySelector('h4').style.background = "yellow";

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

console.log(questionContainer);
console.log(btn1);
console.log(btn2);

questionContainer.addEventListener("click", () => {
  console.log("Click !");
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

console.log(window.scrollY);

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});