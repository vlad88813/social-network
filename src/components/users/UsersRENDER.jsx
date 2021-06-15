import React from 'react';
import styles from './Users.module.css';
import userIMG from '../../assets/img/user_logo.jpg';



// чистая компонента 


let UsersRENDER = (props) => {


    let pageCount = props.totalCount / props.pageSize

    let pages = [];
    for (let i=1; i <= Math.ceil(pageCount); i++){
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
                        <img src={u.photos.small != null ? u.photos.small: userIMG} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.fallowed
                        ?<button onClick={() => {props.unfollow(u.id)}}>UnFollow</button>
                        :<button onClick={() => {props.follow(u.id)}}>Follow</button>}
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