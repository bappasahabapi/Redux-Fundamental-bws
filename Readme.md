`Working with raw js`
01. Working with raw js we have to 

    --> Change the **state** as well as **show the change in the ui**

```js
//TODO: SELECT THE DOM ELEMENT

const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");

//TODO: SET THE INITIAL STATE

let count = 0;

//TODO: ADD EVENT LISTENERS

incrementElement.addEventListener("click", () => {
  count = count + 1;
  counterElement.innerText = count;
});
decrementElement.addEventListener("click", () => {
  count = count - 1;
  counterElement.innerText = count;
});
```
