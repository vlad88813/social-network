import React from 'react';
import { Redirect } from 'react-router';
import Profile_Info from '../Profile_info/Profile_info';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

  return <div>
       <Profile_Info 
       isOwner={props.isOwner} 
       profile={props.profile} 
       status ={props.status} 
       upDateStatus = {props.upDateStatus}
       savePhoto = {props.savePhoto}
       />
       <MyPostsContainer store={props.store}/>
  </div>
};

export default Profile;
