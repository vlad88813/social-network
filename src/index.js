import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id:'vlad', name:'Vlad'},
  {id:'andrey', name: 'Andrey'},
  {id:'sveta', name:'Sveta' },
  {id:'sava', name: 'Sava' }
]

let postData = [
  {id: 1, message: 'hi, how are you?', likeCount: 12},
  {id: 2, message: 'It s my first post', likeCount: 11}
]

let messages = [
  {id: 1, Message:'hi'},
  {id: 2, Message: 'how is your'},
  {id: 3, Message:'Yo' },
  {id: 4, Message: 'Yo' },
  {id: 5, Message: 'Yoo' }
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
