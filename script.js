//todo: select dom elements

const counterElement =document.getElementById('counter')
const incrementElement =document.getElementById('increment')
const decrementElement =document.getElementById('decrement')


//TODO: 00. Action Identifiers:

const INCREMENT ='increment';
const DECREMENT ='decrement';

//TODO: Action creators:





//TODO: 01.initial state

const initialState ={
    value:0,
}

//TODO: 02.create reducer

function counterReducer(state=initialState, action){
    if (action.type===INCREMENT) {
        return{
            ...state,
            value:state.value+action.payload
            // value:state.value+action.value
            // value:state.value+1
        };
    }else if(action.type===DECREMENT){
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



incrementElement.addEventListener('click', ()=>{
    store.dispatch({
        type:INCREMENT,
        payload:10
 
    })
})
decrementElement .addEventListener('click', ()=>{
    store.dispatch({
        type:DECREMENT,
        payload:10
    })
})

