// Créer la logique de compte à rebours


// choice.value = 5 minutes

// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60

// Créer un événement à la validation du form pour lancer le compte à rebours
// let choix = document.getElementById("choice").value;

// const go = document.querySelector("#start");
// const div = document.querySelector("#countdownDisplay");

// let totalSeconds = choix * 60;
// let minutes = Math.floor(totalSeconds / 60);
// let seconds = Math.floor(totalSeconds % 60 );
// function diminuerTemps() {
//     setInterval(()=>{
//         // console.log();
//         div.innerHTML = `<div> ${ minutes--} : ${ seconds --} </div>`;

//     }, 1000)
// };
// // function input() {
// //     let choix = document.getElementById("choice").value;
// //     alert(choix)
// // };

// go.addEventListener("click", (e)=>{
//     e.preventDefault();
//     // input();

//     console.log(choix);
//     console.log(choice.value);

//     div.innerHTML = `<div>  ${ minutes--} : ${ seconds --}  </div>`;

//     diminuerTemps();
// });


//  correction

let totalSeconds ;
let interval ; 

const song = () => {
  const audio = new Audio();
  audio.src = "./song/legendary.mp3";
  audio.play();
}

function countDown() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const sec = seconds < 10 ? "0" + seconds : seconds;

    countdownDisplay.textContent =`${minutes}   :  ${sec}` ;

if (totalSeconds > 0) {
    totalSeconds--;
} else {
    countdownDisplay.textContent = "C'est terminé !";
    clearInterval(interval);

    song();
}
    
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(isNaN(choice.value)){
        alert("entrez un chiffre avant que je me fâche")
    } else {
        totalSeconds = choice.value * 60;
        choice.value = "";
        clearInterval(interval);
        interval = setInterval(countDown, 100);
    }
});
