import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
 
const Counter = (props) => {
 const [count, setCounter] = useState(5); // muutuja ja muutuja “setter”
 return (
 <div>
  <h2>Step: {props.step}</h2>
  <button onClick={setCounter(Math.max(count-props.step, 0))}>-</button>
  <span>  {Math.round(count*10)/10}  </span>
  <button onClick={setCounter(Math.max(count-props.step, 0))}>+</button>
  </div>
)
}
 
const App = () => {
return (
  <main>
    <h1>Counters</h1>
    <Counter step={1}></Counter>
    <Counter step={2}></Counter>
    <Counter step={0.1}></Counter>
  </main>
);
};
 
ReactDOM.render(<App />, document.getElementById("root"));
