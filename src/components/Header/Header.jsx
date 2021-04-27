import React from 'react';
import heder_style from './Header.module.css';

const Header = () =>{
    return <header className={heder_style.header}>
    <img src='https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-rgb.png' />
  </header>
}

export default Header;
