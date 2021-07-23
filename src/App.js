import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/Header-Container';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializesAppThunkCreator } from './redux/App-reducer';
import Loader from './components/loader/loader_1';



class App extends React.Component {

  componentDidMount(){
    this.props.initializesAppThunkCreator();  
  }
  

  render(){
    if (!this.props.initializes)
    return <Loader/>


  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>

        <Route 
        path='/profile/:userID?' 
        render= {() => <ProfileContainer/>}/>

        <Route 
        path= '/dialogs' 
        render= {() => <DialogsContainer/>}/>

        <Route path='/users' render={()=><UsersContainer/>}/>

        <Route path='/news' render= {()=><News />}/>
        <Route path='/music' component={()=><Music />}/>
        <Route path='/settings' component={()=><Setings />}/>
        <Route path='/login' component={()=><Login/>}/>

        
 
      </div>
    </div>
    </BrowserRouter>
  );
}
}

const mapStateToProps= (state) => ({
  initializes: state.app.initializes
})



export default connect(mapStateToProps,{initializesAppThunkCreator})(App);
