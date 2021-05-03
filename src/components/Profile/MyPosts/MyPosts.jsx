import React from 'react';
import MyPosts_style from './MyPosts.module.css';
import Post from './Post/post';


const MyPosts = () => {

  let postData = [
    {id: 1, message: 'hi, how are you?', likeCount: 12},
    {id: 2, message: 'It s my first post', likeCount: 11}
  ]

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
       <Post message={postData[0].message} likeCount= {postData[0].likeCount}/>
       <Post message={postData[1].message} likeCount= {postData[1].likeCount}/>
   
     </div>
  
  </div>
  )
};

export default MyPosts;
