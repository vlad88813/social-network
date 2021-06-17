import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className='app-wrapper-content'>
        <Route path='/profile' render= {() => 
        <ProfileContainer 
        store={props.store}/>}/>
        <Route path= '/dialogs' render= {() => 
        <DialogsContainer
        store = {props.store}/>}/>
        <Route path='/news' render= {()=><News />}/>
        <Route path='/music' component={()=><Music />}/>
        <Route path='/settings' component={()=><Setings />}/>
        <Route path='/users' render={()=><UsersContainer/>}/>
        
 
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;