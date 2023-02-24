🎁🏍️install packages previously

        npm i redux react-redux

### 🎁First checkout the branch

    git checkout -b 2.1-react-redux-setup-counter
    cd 2.1-react-redux-setup-counter
## 🎁install node_module
open terminal at 2.1-react-redux-setup-counter folder and run

    npm i
---

##  🇧🇩 Steps

1.  Difining the type of actions (increment, decrement, reset) to the --> **actionTypes.js**
2.  Now making the acton creator file **actionsCreator.js** for the actions.
3.  Settting up the -->  **reducer.js**file
4.  For sending the parameter to reducer we make a --> **initialState.js** file.
5.  Next make the store --> **store.js**
6.  providing the store to --< **index.js** file. or **App.js** file
7.  Now use the store in the required component.


🔥  Two part is implemented into the counter component
    which is old way part. new is **useSelector()**
    which is old way part. new is **useDispatch()**

```js

import { connect, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/counter/actionsCreator";


function HooksCounter() {
  const count =useSelector((state)=>state.value);

  return (
    <div class="max-w-md mx-auto mt-10 space-y-5">
      <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <h1>Custom props id={id}</h1>
        <div class="text-2xl font-semibold" id="counter">
         {count}
         
        </div>
        {/* <div class="flex space-x-3">
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
        </div> */}
      </div>
    </div>
  );
}

export default HooksCounter;
```
