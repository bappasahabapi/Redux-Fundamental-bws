//todo: select dom elements

const counterElement =document.getElementById('counter')
const incrementElement =document.getElementById('increment')
const decrementElement =document.getElementById('decrement')

//TODO: 01.initial state

const initialState ={
    value:0,
    properties:{
        a: 45,
        b: 50
    },
   
}


//TODO: 00. Action Identifiers:

const INCREMENT ='increment';
const DECREMENT ='decrement';
const TEST ='test';

//TODO: Action creators:

const increment =(value)=>{
    return{
        type:INCREMENT,
        payload:value,
    }
};

const decrement =(value)=>{
    return{
        type:DECREMENT,
        payload:value
    }
};






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
    else{
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
    store.dispatch(increment(5))
})
decrementElement .addEventListener('click', ()=>{
    store.dispatch(decrement(5))
})

