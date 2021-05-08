import React from 'react';
import Profile_Info from '../Profile_info/Profile_info';
import MyPosts from './MyPosts/MyPosts';



const Profile = (props) => {
  return <div>
       <Profile_Info/>
        <MyPosts postData={props.state.postData} 
        newPostText= {props.state.newPostText} 
        addPost= {props.addPost}
        UpdateNewPostText={props.UpdateNewPostText}/>
  </div>
};

export default Profile;
