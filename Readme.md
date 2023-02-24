`Working with raw redux`: **vanilla-reducer.js**

**📝 NOTE:**

**Reducer:** 
reducer word is coming from **reducer array**. The reducer array reduce the big array and make the array into new single value array.

That means reducer function reduces the actions and gives the updated result 


```js
const array =[1,2,5,6,11,4,55,66,77,100]

console.log(array)

// array.reduce(function,initial_value)

console.log(
    array.reduce((previousValue,currentValue)=>{

        const result =previousValue+currentValue
    
        return result
    
    }, 0)
)

// 📰 result
[
  1,  2,  5,  6,  11,
  4, 55, 66, 77, 100
]
327

```
### 📰 Resucer example

```js


const initialState={
    value:0
}


const actions =[
    {type:'increment', payload:1},
    {type:'increment', payload:1},
    {type:'increment', payload:1},
    {type:'decrement', payload:1}
];

const counterReducer =(state,action)=>{
    if(action.type==='increment'){
        return{
            ...state,
            value:state.value+action.payload
        }
    }
    else if(action.type==='decrement'){
        return{
            ...state,
            value:state.value-action.payload
        }
    }
    else{
        return state;
    }
}

const finalResult =actions.reduce(counterReducer,initialState)
console.log(finalResult) 
// --> result should be 2
```

---


A. Working with raw redux we have to

01.Reducer function should be pure function.

02.Reducer has two things state and action.
action is nothing but an obj

---

🚍 Working with nested object

```js
//TODO: 01.initial state

const initialState ={
    value:0,
    properties:{
        a: 45,
        b: 50
    },

}

// handle like this for nested
   else if(action.type===TEST){
        return{
            const updatedState ={
                ...state,
                properties:{
                    ...state.properties,
                    b:state.properties.b+1
                }
            }

        }
        return updatedState
    }

```
📰  How reducer works
```js

    action{
        type,
        payload
    }

//TODO: 02.create reducer

function counterReducer(state=initialState, action){
    if (action.type===INCREMENT) {
        return{
            ...state,
            value:state.value+action.payload
         }
    }
    else if(action.type===DECREMENT){
        return{
            ...state,
            value:state.value-action.payload
        }
    }
    else{
        return state;
    }
}
```
📰 Main script file
```js
//todo: select dom elements

const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");

//TODO: 01.initial state

const initialState = {
  value: 0,
};

//TODO: 00. Action Identifiers:

const INCREMENT = "increment";
const DECREMENT = "decrement";

//TODO: Action creators:

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

//TODO: 02.create reducer

function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

//TODO: 03.create store

const store = Redux.createStore(counterReducer);

//TODO: 05.Render in the ui

const render = () => {
  const state = store.getState();
  counterElement.innerText = state.value.toString();
};

store.subscribe(render);

//TODO: 04.button click listener

incrementElement.addEventListener("click", () => {
  store.dispatch(increment(5));
});
decrementElement.addEventListener("click", () => {
  store.dispatch(decrement(5));
});
```
