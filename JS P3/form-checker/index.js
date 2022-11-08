const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);
let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)
  ) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay("pseudo", "Le pseudo ne doit pas contenir de caractères");
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

// const passwordChecker = (value) => {
//   if (!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)
//   ) {
//     errorDisplay("password", "Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial");
//     progressBar.classList.add('progressRed');
//     password = null;


//   } else if (value.length < 12) {
//     progressBar.classList.add('progressBlue')
//     errorDisplay("password", "", true);
//     password = value;

//   }
// };

const confirmChecker = () => {};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        emailChecker(e.target.value);
        break;
      case "confirm":
        emailChecker(e.target.value);
        break;
      default:
        nul;
    }
  });
});
