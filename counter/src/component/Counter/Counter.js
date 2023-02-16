import React, { useState } from "react";

function Counter() {

  const [count,setCount]=useState(0);

  const increment =()=>{
    setCount((preVal)=>preVal+1)
  }
  const decrement =()=>{
    if(count===0){
      return count
    }else{
       setCount((preVal)=>preVal-1)
    }
   
  }

    
  return (
    <div class="max-w-md mx-auto mt-10 space-y-5">
      <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <h1>Basic Counter Markup</h1>
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
        </div>
      </div>
    </div>
  );
}

export default Counter;
