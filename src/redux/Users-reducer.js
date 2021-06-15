const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';


let initialState =  {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1
    
  };

const UsersReducer = (state = initialState, action) => {
//   let stateCopy = {...state};
    switch (action.type) {

        case FOLLOW:
            let newUsers = state.users.map(i => {
                if (i.id === action.userId) {
                    return {...i, fallowed: true }
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
                        return {...i, fallowed: false }
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
        default: 
            return state;

    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId});
export const unfollowAC = (userId) => ({ type: UN_FOLLOW, userId});
export const setUsersAC = (users) => ({ type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalCount) => ({ type: SET_USER_TOTAL_COUNT, count: totalCount })

export default UsersReducer;
//профильпейдж удалил, т.к функция сразу даст что надо