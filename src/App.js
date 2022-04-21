
import {useReducer} from "react";

const init=(initCount)=>{
  return {
    count1:initCount,
    count2:initCount
  }
}

const  reducer = (state, action)=>{
    switch (action.type){
      case 'inc':
        return{...state, count1:state.count1+1}
      case 'dec':
        return{...state, count1:state.count1-1}
      case 'reset':
        return{...state, count1:0}
      case 'set':
        return {...state, count1:action.payload}

    }
}

const App =()=> {
  const [state, dispatch] = useReducer(reducer, 0, init);

  // const inc = () =>{
  //     dispatch({type:'inc'})
  // }
  return (
    <div>
      {state.count1}
      <button onClick={()=>dispatch({type:'inc'})}>inc</button>
      <button onClick={()=>dispatch({type:'dec'})}>dec</button>
      <button onClick={()=>dispatch({type:'reset'})}>reset</button>
      <button onClick={()=>dispatch({type:'set', payload:10})}>set to 10</button>
    </div>
  );
}

export default App;
