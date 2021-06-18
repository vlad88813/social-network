import React from 'react';
import Loader from '../loader/loader_1';
import YES from '../loader/YES';
import profile_inf_style from './Profile_info.module.css';

const Profile_Info = (props) => {

 if (!props.profile) {
   return <Loader/>
 }
 else {

  return <div>
    <div>
        <img src='https://moya-planeta.ru/upload/images/xl/12/74/1274272b44a29b045a4466d1cdf2ab79.jpg'/>
    </div>
  <div className={profile_inf_style.item}>
    <img src={props.profile.photos.small}/>
    <div>FullName- {props.profile.fullName}</div>
    <div>GitHub- {props.profile.contacts.github}</div>
    <div>instagram- {props.profile.contacts.instagram}</div>
    <div>lookingForAJob- {props.profile.contacts.lookingForAJob != true ? 'yes' : 'not'}</div>
    <div>lookingForAJob- {props.profile.contacts.lookingForAJob != true ? <YES/> : <span>&#10005;</span>}</div>

    ava + description
  </div>

  </div>
};
}
export default Profile_Info;
