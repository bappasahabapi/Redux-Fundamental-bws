import Button from "./Button";
import Count from "./Count"

function Counter({id,increment,decrement,count}) {

  
  return (
    <div class="max-w-md mx-auto mt-10 space-y-5">
      <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <h1>Basic Counter Markup</h1>
        
         <Count  count={count}/>
        <div class="flex space-x-3">
          <Button handlerFunction={()=>increment(id) }>Increment</Button>
          <Button handlerFunction={()=>decrement(id) }> Decrement</Button>
         
        </div>
      </div>
    </div>
  );
}

export default Counter;
