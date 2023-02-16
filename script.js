//TODO: SELECT THE DOM ELEMENT

const counterElement =document.getElementById('counter');
const incrementElement =document.getElementById('increment');
const decrementElement =document.getElementById('decrement');


const counterElement2 =document.getElementById('counter2');
const incrementElement2 =document.getElementById('increment2');
const decrementElement2 =document.getElementById('decrement2');




//TODO: SET THE INITIAL STATE

let count =0;
let count2 =2;

//TODO: ADD EVENT LISTENERS

incrementElement.addEventListener("click",()=>{
    count =count+1;
    counterElement.innerText=count;
})
decrementElement.addEventListener("click",()=>{
    count =count-1;
    counterElement.innerText=count;
})

incrementElement2.addEventListener("click",()=>{
    count =count+2;
    counterElement2.innerText=count;
})
decrementElement2.addEventListener("click",()=>{
    count =count-2;
    counterElement2.innerText=count;
})
