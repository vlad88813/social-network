import React from 'react';
import styles from './Users.module.css';
import userIMG from '../../assets/img/user_logo.jpg';
import { NavLink } from 'react-router-dom';
import YES from '../loader/YES';
import Paginator from '../Paginator/Paginator'
import PaginationMaterialUI from '../Paginator/Paginator_MaterialUI';
import Loader_2 from '../loader/Loader_2';

// чистая компонента 

let UsersRENDER = (props) => {

        return <div>
            
            {props.isFetching ? <Loader_2/> : null}
            
            <PaginationMaterialUI
            totalCount={props.totalCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
            isFetching={props.isFetching}
            />
            
            {/* <br/> я сделал отступ в материал с paddingBottom: theme.spacing(2)*/}

        <Paginator 
        totalCount={props.totalCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
         />

        <br/> 
        
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