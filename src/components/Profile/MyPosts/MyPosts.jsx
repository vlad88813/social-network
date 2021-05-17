import React from 'react';
import MyPosts_style from './MyPosts.module.css';
import Post from './Post/post';
import {upDateNewPostActionCreator, addPostActionCreator} from '../../../redux/profile-reducer';

const MyPosts = (props) => {
  
  let postElements = 
      props.postData.map( p => <Post message={p.message} likeCount= {p.likeCount}/> )


  let newPosrElement = React.createRef();

  const addPost = () => {
    // newPosrElement.current.value;
    props.dispatch(addPostActionCreator());
  }

  const onPostChange =() => {
    let text = newPosrElement.current.value;
    props.dispatch(upDateNewPostActionCreator(text));
  }

  return (
  <div className={MyPosts_style.post}>
      <h3> my post </h3>
    <div>
        <div>
      <textarea onChange={onPostChange} ref={newPosrElement} value={props.newPostText}/>
        </div>
        <div>
      <button onClick={ addPost }>Add post</button>
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
