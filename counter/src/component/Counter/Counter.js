import { connect } from "react-redux";
import { decrement, increment } from "../../redux/counter/actionsCreator";


function Counter({count,increment,decrement, id, color}) {
  // console.log(id, color)

  return (
    <div class="max-w-md mx-auto mt-10 space-y-5">
      <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <h1>Custom props id={id}</h1>
        <div class="text-2xl font-semibold" id="counter">
         {count}
         
        </div>
        <div class="flex space-x-3">
          <button
            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            id="increment"
            onClick={increment}
          > 
            Increment
          </button>
          <button
            class="bg-red-400 text-white px-3 py-2 rounded shadow"
            id="decrement"
            onClick={decrement}
          >
            Decrement
          </button>
          <button
            class="bg-green-600 text-white px-3 py-2 rounded shadow"
            id="decrement"
            onClick={''}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps =(state)=>{
  return{
    count:state.value,
  }

};
const mapDispatchToProps =(dispatch)=>{
  return{
    increment:(value)=>dispatch(increment(value)),
    decrement:(value)=>dispatch(decrement(value)),
  }

};
export default connect(mapStateToProps,mapDispatchToProps)(Counter)