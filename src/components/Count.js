import React, { useReducer } from 'react'

 function countReducer(state , action ) {
     if (action === 'INCREMENT'){
         return state + 1 ;   
     }
     if(action === 'DECREMENT'){
         return state - 1; 
     }
     throw new Error(action + 'is not defined in count reducer');
}
export default function Count() {
  
  const [count , dispatch] =  useReducer(countReducer , 0);
  return (
       <div>
            Count : {count}
           <button type="" onClick={() => dispatch('INCREMENT')}> Increment </button>
           <button type="" onClick={() => dispatch('DECREMENT')}> Decrement  </button> 

       </div>
  )
}
