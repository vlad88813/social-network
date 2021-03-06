import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import  styled, {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
`

    ReactDOM.render(
      <BrowserRouter>
        <Provider store = {store}>
          <>
          <Global/>
        <App />
        </>
        </Provider>
      </BrowserRouter>,
      document.getElementById('root')
    );

// так мы передаем функцию рендер через колбэки на 
// страничку файла state.js.   store доступно через импорт. далее там метод вызываем.getState

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
