import React from 'react';
import { NavLink } from 'react-router-dom';
import heder_style from './Header.module.css';
import Button from '@material-ui/core/Button';



const Header = (props) =>{
    return <header className={heder_style.header}>
    <a href='/profile'><img src='https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-rgb.png' /></a>
    <div className={heder_style.login}>
      {props.isAuth 
      ? <div> {props.login} <Button variant="outlined" color="primary" onClick={props.Logout}>LOGOUT</Button></div> 
      :<NavLink to ='/login'><Button variant="outlined" color="primary" onClick={props.Logout}>LOGIN</Button></NavLink>}
      
      </div>
    
  </header>
}

export default Header;
