import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, UpdateNewPostText} from './redux/state';



 let rerenderEntireTree = ()=> {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost= {addPost} UpdateNewPostText = {UpdateNewPostText} />
      </React.StrictMode>,
      document.getElementById('root')
    );
    }

rerenderEntireTree(state);

subscribe(rerenderEntireTree); // так мы передаем функцию рендер через колбэки на 
// страничку файла state.js

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
