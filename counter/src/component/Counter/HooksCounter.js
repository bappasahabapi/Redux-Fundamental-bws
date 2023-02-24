import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/counter/actionsCreator";


function HooksCounter({id}) {

const count =useSelector((state)=>state.value);
const dispatch =useDispatch();

const addIncrement=(value)=>{
dispatch(increment(value));
};
const addDecrement=(value)=>{
dispatch(decrement(value));
};
return (
<div class="max-w-md mx-auto mt-10 space-y-5">
  <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
    <h1>Custom props id={id}</h1>
    <div class="text-2xl font-semibold" id="counter">
      {count}

    </div>
    <div class="flex space-x-3">
      <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment"
        onClick={()=>addIncrement(5)}
        >
        Increment
      </button>
      <button class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement" onClick={()=>addDecrement(5)}
        >
        Decrement
      </button>

    </div>
  </div>
</div>
)
}

export default HooksCounter