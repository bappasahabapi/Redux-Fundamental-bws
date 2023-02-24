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
```js
// 🔥 old way when class component is used 
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


```
// 🔥 new way

useSelector() hook
