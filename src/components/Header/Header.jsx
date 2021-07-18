import React from 'react';
import { NavLink } from 'react-router-dom';
import heder_style from './Header.module.css';

const Header = (props) =>{
    return <header className={heder_style.header}>
    <a href='/profile'><img src='https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-rgb.png' /></a>
    <div className={heder_style.login}>
      {props.isAuth ? <div> {props.login} <button onClick={props.Logout}>LogOut</button></div> 
      :<NavLink to ='/login'>Login</NavLink>}
      
      </div>
    
  </header>
}

export default Header;
