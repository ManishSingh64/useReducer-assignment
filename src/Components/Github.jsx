import React, { useReducer, useState } from "react";
import { fetchUser } from "./Reducer/Action";
import { githubReducer } from "./Reducer/Reducer";


const initValue = {
  isLoading: false,
  isError: false,
  data: [],
  token: "",
};

export const Github = () => {
  const [state, dispatch] = useReducer(githubReducer, initValue);
  const [text, setText] = useState("");

  if(state.isLoading){
    return <h1>Loading Data</h1>
   } 

  if(state.isError){
    return <h1>Error </h1>
  }
 
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="search something"
        />
        <button onClick={() => fetchUser(dispatch, text)}>SEARCH</button>
      </div>
      <div>
        {state.data.map((item) => (
          <div key={item.login}>{item.login}</div>
        ))}
      </div>
    </div>
  );
};
