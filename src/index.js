import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
function reducer(state=0, action){
    // eslint-disable-next-line default-case
    switch (action.type){
        case 'inc':
            return state + action.payload;
        case 'dec':
            return state - action.payload;
        case 'reset':
            state = action.payload
            return state;
        default:
            return state
    }
}
const store = createStore(reducer);


root.render(<Provider store={store}><App/></Provider>)
