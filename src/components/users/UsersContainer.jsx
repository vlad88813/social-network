import { connect } from 'react-redux';
import React from 'react';
import { setCurrentPage, getUsersThunkCreator, deleteUsersThunkCreator, postUsersThunkCreator } from '../../redux/Users-reducer';
import UsersRENDER from './UsersRENDER';
// import PreLoader from '../../assets/img/loader.gif';
import Loader from '../loader/loader_1';
import { AutRedirectComponent } from '../../hoc/AutRedirectComponent';
import { compose } from 'redux';
import { getTotalCount, getUsers, getDisabledButton, getIsFetching, getCurrentPage, getPageSize } from '../../redux/user-selectors';


//так как connect делает контейнер, то мы перекинули и сюда нашу глязную компоненту (классовую) для выполнения запросов
//вся контейнерная логика лежит тут

class UsersContainer extends React.Component{
    //constructor(props){
    //     super(props);
    // }

        componentDidMount() {
           this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        
        }


        onPageChanged = (currentPage) => {
            // this.props.setCurrentPage(currentPage);
            // this.props.setIsFetching(true);
            
            // userAPI.getUsers(currentPage,this.props.pageSize)
            //.then(data => {
                
            //     this.props.setUsers(data.items);
            //     this.props.setIsFetching(false);
                
                    
            // });
            this.props.setCurrentPage(currentPage);
            this.props.getUsersThunkCreator(currentPage, this.props.pageSize);
            
        }

    render(){

        return <>
        {this.props.isFetching ? <Loader/> : 
        <UsersRENDER 
            users = {this.props.users}
            pageSize = {this.props.pageSize}
            totalCount = {this.props.totalCount}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            disabledButton = {this.props.StateDisabledButton}
            deleteUsersThunkCreator = {this.props.deleteUsersThunkCreator}
            postUsersThunkCreator = {this.props.postUsersThunkCreator}
            
             />}
            
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        StateDisabledButton: getDisabledButton(state)
    }
}
//опять забыл как раб mapStateToProps ---- combne reducer находит все курски стейта по редьюсерам и соединяет их. 
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(isFetchingAC(isFetching))

//         }

//     }
// }

// export default connect(mapStateToProps, 
//     {follow: followAC,
//     unfollow: unfollowAC,
//     setUsers: setUsersAC,
//     setCurrentPage: setCurrentPageAC,
//     setTotalUsersCount: setTotalUsersCountAC,
//     setIsFetching: isFetchingAC})(UsersContainer);
//если удалить AC ТО ключ-значение будут совпадать и значит мы можем писать один раз


// let AutRecirect = AutRedirectComponent(UsersContainer);


// export default connect(mapStateToProps, 
//     {setCurrentPage,
//     getUsersThunkCreator,
//     deleteUsersThunkCreator,
//     postUsersThunkCreator})(AutRecirect);
    

export default compose(
    connect(mapStateToProps, 
        {setCurrentPage,
        getUsersThunkCreator,
        deleteUsersThunkCreator,
        postUsersThunkCreator}),

    AutRedirectComponent
)(UsersContainer);


// connect создает контейнер 