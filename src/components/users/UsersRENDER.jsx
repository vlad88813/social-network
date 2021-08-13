import React, { useEffect, useState } from 'react';
import styles from './Users.module.css';
import userIMG from '../../assets/img/user_logo.jpg';
import { NavLink } from 'react-router-dom';
import YES from '../loader/YES';
import Paginator from '../Paginator/Paginator'

// чистая компонента 

let UsersRENDER = (props) => {

    // let portionSize = 10
    // let pageCount = Math.ceil(props.totalCount / props.pageSize)
    
    // let pages = [];
  
    // for (let i=1; i <= Math.ceil(pageCount); i++){
    //     pages.push(i);
    // }


    // let portionCount = Math.ceil(pageCount / portionSize);
  
    // let [portionNumber,setPortionNumber] = useState(1);
    // useEffect(()=>setPortionNumber(Math.ceil(props.currentPage/portionSize)), [props.currentPage]);  // при уходе со страницы юзеров на другую и при повторном возвращении на неё, пагинация подгоняется под текущую страницу юзеров, которая записана в userReducer
    // let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    // let rightPortionPageNumber = portionNumber * portionSize; 

        return <div>
        <Paginator 
        totalCount={props.totalCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
         />

        {/* <div>
            {pages.map(p=>{
                return <span className={props.currentPage === p && styles.selectedPage}
                onClick={ (e) => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div> */}
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
                        ?<button disabled={props.disabledButton.some(id => id === u.id)} onClick={() => {
                            props.deleteUsersThunkCreator(u.id);
                        }}>UnFollow</button>


                        :<button disabled={props.disabledButton.some(id => id === u.id)} onClick={() => {
                            props.postUsersThunkCreator(u.id);

                            }} className ={styles.button_follow}>
                                <span className = {styles.follow_1}>Follow  <YES/></span><br/>
                                <span aria-hidden="true" className = {styles.follow_2}> 10+ subscriptions</span>
                                </button>}
                       
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