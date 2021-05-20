import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


export const Set_Profile_Data_Action = (value) => ({type: 'Set_Profile_Data', payload: value})


const SetUserNameAction = { type: 'SetUserName', payload: 'George' }
const ProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SetUserName':
      return { ...state, usame: 'hhhh' };
    case 'Set_Profile_Data':
      return {...state, profile:action.payload}
    default: return state;
  }
}

const Store = createStore(ProfileReducer, { profile: {name:'Anderson', age:20, email:'mulla@gmail.com'} })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
