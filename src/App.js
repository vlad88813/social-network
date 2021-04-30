import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';


const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div class='app-wrapper-content'>
        <Route path='/profile' component={Profile}/>
        <Route path= '/dialogs' component={Dialogs}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Setings}/>
 
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;