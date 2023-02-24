
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













const array =[1,2,5,6,11,4,55,66,77,100]

// console.log(array)

// array.reduce(function,initial_value)

console.log(
    array.reduce((previousValue,currentValue)=>{

        const result =previousValue+currentValue
    
        return result
    
    }, 0)
)

