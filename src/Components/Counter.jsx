import React, { useReducer } from "react";
import { useState } from "react";
import { Add, Sub } from "./Reducer/CountAction";
import { CounterReducer } from "./Reducer/CounterReducer";

const initState = {
  count: 0,
};

export const Counter = () => {

  const [state, dispatch] = useReducer(CounterReducer, initState)

  const [text, setText] = useState("");
  console.log('num',text)

  console.log('updated',state)

  return (
    <div>
      Counter
      <div>
        <input type="number" onChange={(e) => setText(e.target.value)} />
        <button onClick={()=>Add(dispatch,text)}>Add</button>
        <button onClick={()=>Sub(dispatch,text)}>Reduce</button>
      </div>
      <h1>Amount: {state.count}</h1>
    </div>
  );
};
