import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Counter/Counter";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HooksCounter from "./component/Counter/HooksCounter";

function App() {
  return (
    <Provider store={store}>
      <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>
        <Counter id='40' color={'red'} />
        
      </div>
    </Provider>
  );
}

export default App;
