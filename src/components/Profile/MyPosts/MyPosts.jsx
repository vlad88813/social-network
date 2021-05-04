import React from 'react';
import MyPosts_style from './MyPosts.module.css';
import Post from './Post/post';


const MyPosts = (props) => {

  let postElements = 
      props.postData.map( p => <Post message={p.message} likeCount= {p.likeCount}/> )

  return (
  <div className={MyPosts_style.post}>
      <h3> my post </h3>
    <div>
        <div>
      <textarea></textarea>
        </div>
        <div>
      <button>Add post</button>
      <button>remove</button>
        </div>
     
  </div>
     <div className={MyPosts_style.post}>
        { postElements }
     </div>
  
  </div>
  )
};

export default MyPosts;
