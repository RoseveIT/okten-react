import {useDispatch, useSelector} from "react-redux";

function App() {
    let state = useSelector(state => state);

    let dispatch = useDispatch()
  return (
    <div>
        <h2>State is - {state}</h2>
        <button onClick={()=>{
            dispatch({type:'inc', payload: 1})
        }}>Inc</button>
        <button onClick={()=>{
            dispatch({type:'dec', payload: 1})
        }}>Dec</button>
        <button onClick={()=>{
            dispatch({type:'reset', payload: 0})
        }}>Reset</button>
    </div>
  );
}

export default App;
