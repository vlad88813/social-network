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


const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div class='app-wrapper-content'>
        <Route path='/profile' render= {() => <Profile postData={props.postData} />}/>
        <Route path= '/dialogs' render= {() => <Dialogs dialogsData={props.dialogsData} messages={props.messages}/>}/>
        <Route path='/news' render= {()=><News />}/>
        <Route path='/music' component={()=><Music />}/>
        <Route path='/settings' component={()=><Setings />}/>
 
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;