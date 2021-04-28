import React from 'react';
import MyPosts_style from './MyPosts.module.css';


const MyPosts = () => {
  return (
  <div className={MyPosts_style.post}>
      my post
    <div>
      New post
  </div>
  <div >
     <div>
        post 1 
     </div>
     <div>
        post 2
        
     </div>
    </div>
  </div>
  )
};

export default MyPosts;
