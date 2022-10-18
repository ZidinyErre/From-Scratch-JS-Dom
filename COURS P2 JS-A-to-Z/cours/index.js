// document.querySelector('h4').style.background = "yellow";

const questionContainer = document.querySelector(".click-event");

console.log(questionContainer);

questionContainer.addEventListener("click", () => {
  console.log("Click !");
});
