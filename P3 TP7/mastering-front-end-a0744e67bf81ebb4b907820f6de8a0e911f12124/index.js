// Créer la logique de compte à rebours

// choice.value = 5 minutes

// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60

// Créer un événement à la validation du form pour lancer le compte à rebours

const choix = document.querySelector("#choice");
const go = document.querySelector("#start");
const div = document.querySelector("#countdownDisplay");
// function set() {
//     setInterval()
// }
// let temps = choice.value;
let minutes;
let seconds;

function diminuerTemps(params) {
    setInterval(()=>{
        // console.log();
        div.innerHTML = `<div> ${ choice.value--} </div>`;

    }, 1000)
};

go.addEventListener("click", (e)=>{
    e.preventDefault();
    div.innerHTML = `<div> ${ choice.value--} </div>`;

    diminuerTemps();
});

