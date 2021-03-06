import React from 'react';
import Loader from '../loader/loader_1';
import YES from '../loader/YES';
import profile_inf_style from './Profile_info.module.css';
import userIMG from '../../assets/img/user_logo.jpg';
import ProfileStatus from './ProfileStatus';
import ProfileStatusHooks from './ProfileStatusCopyHooks';
import ProfileGitHubHooks from './ProfileGitHubHooks';
import { userAPI } from '../../api/api';


const Profile_Info = (props) => {
  
 if (!props.profile) {
   return <Loader/>
 }
 else {
  //src={u.photos.small != null ? u.photos.small: userIMG}



//ниже мы достаем выбранную картинку из инпута e.target.files[0](синтаксис инпута)
const onMainPhotosSelected = (e) => {
  if (e.target.files.length){
    props.savePhoto(e.target.files[0])
  } 
}



  return  <div>
    {/* <div>
        <img src='https://moya-planeta.ru/upload/images/xl/12/74/1274272b44a29b045a4466d1cdf2ab79.jpg'/>
    </div> */}
  <div className={profile_inf_style.item}>
    <img src={props.profile.photos.small!= null ? props.profile.photos.small : userIMG} className={profile_inf_style.userPhoto}/>
    {/* <ProfileStatus  status = {props.status} upDateStatus = {props.upDateStatus}/> */}
    
    {props.isOwner && <input type={"file"} onChange={onMainPhotosSelected}/>}

    <ProfileStatusHooks status = {props.status} upDateStatus = {props.upDateStatus} />
    <div>FullName- {props.profile.fullName}</div>
    <div>GitHub- {props.profile.contacts.github}</div>
    {/* <div>instagram- {props.profile.contacts.instagram}</div>  */}
    <div>insta- <ProfileGitHubHooks profile={props.profile} contacts = {props.profile.contacts} upDateGitHub = {userAPI.upDateGitHub}/> </div>



    <div>{Object.keys(props.profile.contacts).map(key=> {
      return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
    })}</div>



    <div>lookingForAJob- {props.profile.contacts.lookingForAJob != true ? 'yes' : 'not'}</div>
    <div>lookingForAJob- {props.profile.contacts.lookingForAJob != true ? <YES/> : <span>&#10005;</span>}</div>
    

  </div>

  </div>
};
}

const Contact = ({contactTitle, contactValue}) => {
  return <div>{contactTitle}:{contactValue}</div>
}

export default Profile_Info;
