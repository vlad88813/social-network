import React from 'react';
import styles from './Users.module.css';
import userIMG from '../../assets/img/user_logo.jpg';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';



// чистая компонента 


let UsersRENDER = (props) => {


    let pageCount = props.totalCount / props.pageSize

    let pages = [];
    for (let i=1; i < Math.ceil(pageCount); i++){
        pages.push(i+' ');
    }


        return <div>
        <div>
            {pages.map(p=>{
                return <span className={props.currentPage === p && styles.selectedPage}
                onClick={ (e) => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <NavLink to={'/profile/'+ u.id}>
                        <img src={u.photos.small != null ? u.photos.small: userIMG} className={styles.userPhoto}/>
                    </NavLink>
                    </div>
                    <div>


                        {u.followed
                        ?<button onClick={() => {
                            
                            userAPI.deleteUsers(u.id)
                            .then(resultCode => {
                                if (resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            });


                            }}>UnFollow</button>


                        :<button onClick={() => {
                            
                          
                            userAPI.postUsers(u.id)
                                    .then(resultCode=> {
                                        if (resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
                            
                            }}>Follow</button>}
                       
                       
                       
                       
                        {/* <button>Follow</button> */}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.cantry'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
    }


export default UsersRENDER;