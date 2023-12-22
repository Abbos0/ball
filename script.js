let topp = 100;
let left = 100;

let Square = document.querySelector(".square")

const Up = () =>{
    console.log("working");
    topp = topp - 10
    Square.style.top = `${topp}px`
}
const Right= () =>{
    console.log("working");
    left= left + 10
    Square.style.left = `${left}px`
}
const Left = () =>{
    console.log("working");
    left = left - 10
    Square.style.left = `${left}px`
}
const Down = () =>{
    console.log("working");
    topp = topp + 10
    Square.style.top = `${topp}px`
}
const Restart= () =>{
    console.log("working");
    Square.style.top = `${100}px`
    Square.style.left = `${100}px`
    Square.style.left = `${100}px`
    Square.style.top = `${100}px`
}