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

