import React from 'react';
import { NavLink } from 'react-router-dom';
import navbar_ from './Navbar.module.css';


const Navbar = () => {
  return (
  <nav className={navbar_.nav}>
    <div className={navbar_.item}>
      <NavLink to='/profile' activeClassName={navbar_.activeLink}>Profile</NavLink>
    </div>
    <div className={navbar_.item}>
      <NavLink to='/dialogs'activeClassName={navbar_.activeLink}>Messages</NavLink >
    </div>
    <div className={navbar_.item}>
      <NavLink to='/news' activeClassName={navbar_.activeLink}>News</NavLink >
    </div>
    <div className={navbar_.item}>
      <NavLink to='/music' activeClassName={navbar_.activeLink}>Music</NavLink >
    </div>
    <div className={navbar_.item}>
      <NavLink to='/settings' activeClassName={navbar_.activeLink}>Settings</NavLink >  {/*tyt http adres add*/}
    </div>
  </nav>
  )
}

export default Navbar;
