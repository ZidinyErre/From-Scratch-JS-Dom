// const container = document.querySelector(".container");
// let random1 = Math.floor(Math.random() * 255);
// let random2 = Math.floor(Math.random() * 255);
// let random3 = Math.floor(Math.random() * 255);
// let x = 0;

// let inter = setInterval(() => {
//   container.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
// //   if (++x === 1000) {
// //     window.clearInterval(inter);
// //   }
// }, 1000, 100);

// // let inter = window.onload = ()  => {
// //     setInterval(() => {
// //         Math.floor(Math.random() * 255)
// //     }, 1000)
// // };

// console.log(random1);
// console.log(random2);
// console.log(random3);
// console.log(x);

function getColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    const color = `rgb(${r},${g}, ${b})`;
    
    document.body.style.background = color;
    document.body.innerHTML = `<h2> ${color}</h2>`;
}

setInterval(getColor, 1000);