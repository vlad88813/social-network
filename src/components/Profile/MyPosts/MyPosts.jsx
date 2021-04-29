import React from 'react';
import MyPosts_style from './MyPosts.module.css';
import Post from './Post/post';


const MyPosts = () => {
  return (
  <div className={MyPosts_style.post}>
      my post
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>remove</button>
     
  </div>
     <div className={MyPosts_style.post}>
       <Post message='hi, how are you?' likeCount='3'/>
       <Post message='It s my firts post' likeCount='8'/>
   
     </div>
  
  </div>
  )
};

export default MyPosts;
