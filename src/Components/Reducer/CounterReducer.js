import React from 'react'

export const CounterReducer = (state,{type,payload}) => {
    console.log(state , payload)
  switch(type){

    case 'Increment':
        return{
          ...state,count: state.count + +payload
        }
    case 'Decrement':
        return{
            ...state,count:state.count - +payload
        }
    default :
    return state
  }
}
