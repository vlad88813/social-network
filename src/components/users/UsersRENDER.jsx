import React, { useState } from 'react';
import styles from './Users.module.css';
import userIMG from '../../assets/img/user_logo.jpg';
import { NavLink } from 'react-router-dom';
import YES from '../loader/YES';
import cn from 'classnames';

// чистая компонента 

let UsersRENDER = (props) => {

    let portionSize = 10
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    
    let pages = [];
  
    for (let i=1; i <= Math.ceil(pageCount); i++){
        pages.push(i);
    }
//portionSize
//Можно добавить ещё:
// useEffect(()=>setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage]);
// при уходе со страницы юзеров на другую и при повторном возвращении на неё, пагинация подгоняется под текущую страницу юзеров, которая записана в userReducer, но лучше самим увидеть разницу.
//    let portionSize = 5;


    let portionCount = Math.ceil(pageCount / portionSize);
 
    let [portionNumber,setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize; 

        return <div>
            <div>
            {portionNumber > 1 &&
            <button onClick={()=> {setPortionNumber(portionNumber-1) }}> pred </button>}
            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return  <span className= {cn ({
                    [styles.selectedPage]: props.currentPage === p
                }, styles.pageNumber)}
                key={p}
                onClick={(e)=>{
                    props.onPageChanged(p);
                }}>{p}</span> 
            })}
            
        {portionCount > portionNumber && 
        <button onClick={()=>{setPortionNumber(portionNumber+1)}}> last </button>}
        </div>

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