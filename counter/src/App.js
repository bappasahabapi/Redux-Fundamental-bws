import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Counter/Counter";
import Summation from "./component/Counter/Summation";
import { useState } from "react";

const initialState = [{ id: 1, count: 0 },{id:2,count:2}];

function App() {
  const [allCounterState, setAllCounterState]=useState(initialState);

  const totalCount =()=>{
    return allCounterState.reduce((total,payload)=>total +payload.count,0)
  }

  const increment =(id)=>{
    const updatedCounter =allCounterState.map(obj=>{
      if(obj.id === id){
        return{
          ...obj,
          count:obj.count +1
        }
      }
      return{...obj}   // given the copied object
    })
    
  }

  const decrement =(id)=>{
    const updatedCounter =allCounterState.map(obj=>{
      if(obj.id === id){
        return{
          ...obj,
          count:obj.count -1
        }
      }
      return{...obj}
    })
    
  }

  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <Counter/>
      {allCounterState.map((count)=>{
                    <Counter 
                    key={count.id}
                    id={count.id}
                    increment={increment} 
                    decrement={decrement}
                    count={count.count}
                    />
      })}
     
      <Summation count={totalCount()} />
      {/* <Summation count={2} /> */}
    </div>
  );
}

export default App;
