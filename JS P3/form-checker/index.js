const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span;
    textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.lenght > 0 && (value.lenght < 3 || value.lenght > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay("pseudo", "Le pseudo ne doit pas contenir de caractères");
  } else {
    errorDisplay("pseudo", "", true);
  }
};

const emailChecker = () => {};

const passwordChecker = () => {};

const confirmChecker = () => {};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker();
        break;
      case "email":
        emailChecker();
        break;
      case "email":
        emailChecker();
        break;
      case "email":
        emailChecker();
        break;
      default:
        nul;
    }
  });
});
