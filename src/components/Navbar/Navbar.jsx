import React from 'react';
import navbar_ from './Navbar.module.css';



const Navbar = () => {
  return <nav className={navbar_.nav}>
    <div className={navbar_.item}>
      <a>Profile</a>
    </div>
    <div className={navbar_.item}>
      <a>Messages</a>
    </div>
    <div className={navbar_.item_active}>
      <a>Music</a>
    </div>
    <div className={navbar_.item}>
      <a>Settings</a>
    </div>
  </nav>
}

export default Navbar;
