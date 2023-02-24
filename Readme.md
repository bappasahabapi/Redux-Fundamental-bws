```js
const products=[
    {id:1 , name:'water-bottol',price: 50, color: 'yellow'},
    {id:2 , name:'pen-bottol', price: 507, color: 'black'},
    {id:3 , name:'cock-bottol',price: 503, color: 'black'},
    {id:4 , name:'soft-bottol',price: 506, color: 'red'},
    {id:5 , name:'note-bottol',price: 507, color: 'pink'}
]

//TODO: map
console.log('Map:--------->')
const product =products.map(product=>console.log(product))
const productName=products.map(p=>p.name)
// console.log(productName)

console.log('Filter:-------->')
//TODO: filter

const price=products.filter(product=>product.price >506)
const blacks=products.filter(p=>p.color==='black')
console.log(blacks)
// console.log(price)

//TODO: find
console.log('Find:-------->')
const id =products.find(pId=>pId.id===2)
console.log(id)








```






`Working with raw js`
01. Working with raw redux  we have to 

    01. initial state
    02.create reducer
    03.create store
    04.button click listener
    05.Render in the ui

```js

//TODO: 01.initial state

const initialState ={
    value:0,
}

//TODO: 02.create reducer

function counterReducer(state=initialState, action){
    if (action.type==='increment') {
        return{
            ...state,
            value:state.value+1
        };
    }else if(action.type==='decrement'){
        return{
            ...state,
            value:state.value-1
        };
    } else{
        return state;
    }
}

//TODO: 03.create store

const store =Redux.createStore(counterReducer);

//TODO: 05.Render in the ui

const render =()=>{
    const state=store.getState();
    counterElement.innerText=state.value.toString()

}

store.subscribe(render)


//TODO: 04.button click listener

// select dom elements

const counterElement =document.getElementById('counter')
const incrementElement =document.getElementById('increment')
const decrementElement =document.getElementById('decrement')

incrementElement.addEventListener('click', ()=>{
    store.dispatch({
        type:'increment',
    })
})
decrementElement .addEventListener('click', ()=>{
    store.dispatch({
        type:'decrement',
    })
})


```
