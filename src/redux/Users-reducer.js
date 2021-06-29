import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';
const FETCHING = 'FETCHING';
const DISABLED = 'DISABLED';


let initialState =  {
    users: [],
    pageSize: 50,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    disabledButton: []
  };

const UsersReducer = (state = initialState, action) => {
//   let stateCopy = {...state};
    switch (action.type) {

        case FOLLOW:
            let newUsers = state.users.map(i => {
                if (i.id === action.userId) {
                    return {...i, followed: true }
                } 
                return i;
            })
            return {
                ...state,
                users: newUsers
            }
            // stateCopy.Users = [...state.Users]
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(i => {
                    if (i.id === action.userId){
                        return {...i, followed: false }
                    }
                    return i;
                })
            } 
        case SET_USERS: {
            return {...state, users: action.users} 
        }
        case SET_CURRENT_PAGE: {
            
            return {...state, currentPage:action.currentPage}
        }
        case SET_USER_TOTAL_COUNT: {

            return {...state, totalCount: action.count}
        }
        case FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case DISABLED: {
            return {...state, 
                disabledButton: action.isFetchingNew 
            ? [...state.disabledButton, action.userId]
            : state.disabledButton.filter(id => id != action.userId)
            }
        }
        default: 
            return state;

    }
}

export const follow = (userId) => ({ type: FOLLOW, userId});
export const unfollow = (userId) => ({ type: UN_FOLLOW, userId});
export const setUsers = (users) => ({ type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({ type: SET_USER_TOTAL_COUNT, count: totalCount });
export const setIsFetching = (isFetching) => ({type:FETCHING, isFetching});
export const setDisabledButton = (isFetchingNew, userId) => ({type:DISABLED, isFetchingNew, userId});

export default UsersReducer;

//setIsFetching - это loader

export const getUsersThunkCreator = (currentPage, pageSize) => {
    
    return (dispatch) => {

    dispatch(setIsFetching(true));
            
            userAPI.getUsers(currentPage, pageSize).then(data => {
                
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(setIsFetching(false));
                    
            });
        }
}

export const deleteUsersThunkCreator = (userId) => {

    return (dispatch) => {

    dispatch (setDisabledButton(true, userId));

             userAPI.deleteUsers(userId)
                  .then(resultCode => {
                     if (resultCode === 0) {
                    dispatch(unfollow(userId))
                    }
                    dispatch (setDisabledButton(false, userId));
        });
    }
}


export const postUsersThunkCreator = (userId) => {

    return (dispatch) => {

    dispatch (setDisabledButton(true, userId));

            userAPI.postUsers(userId)
                .then(resultCode=> {
                     if (resultCode === 0) {
                     dispatch(follow(userId))
                     }
                     dispatch(setDisabledButton(false,userId))
        });
    }
}

