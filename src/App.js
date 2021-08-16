import React, {Suspense}from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Setings from './components/Setings/Setings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/Header-Container';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializesAppThunkCreator } from './redux/App-reducer';
import Loader from './components/loader/loader_1';
import Loader_3 from './components/loader/loader_3';

//так мы загружаем компоненты только по нажатию на них, а не сразу при загрузке всего прокета
//Компонент с ленивой загрузкой должен рендериться внутри компонента Suspense
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Setings = React.lazy(() => import('./components/Setings/Setings'));



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


      <Suspense fallback={<Loader_3/>}>
        <Route path='/news' render= {()=><News />}/>
        <Route path='/music' component={()=><Music />}/>
        <Route path='/settings' component={()=><Setings />}/>
      </Suspense> 

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
