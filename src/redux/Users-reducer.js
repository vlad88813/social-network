const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';


let initialState =  {
    users: [
    //    { id: 1, photoUrl: 'https://www.meme-arsenal.com/memes/f71dd3da1aba42eb46ca90a8149242d0.jpg',fallowed:false, fullName: 'Vlad', status: 'i am a boss', location: {city: 'Minsk', cantry: 'belarus'} },
    //    { id: 2, photoUrl: 'https://www.meme-arsenal.com/memes/f71dd3da1aba42eb46ca90a8149242d0.jpg',fallowed:true, fullName: 'Dima', status: 'I love e34',location: {city: 'Voronech', cantry: 'Russia'} },
    //    { id: 3, photoUrl: 'https://www.meme-arsenal.com/memes/f71dd3da1aba42eb46ca90a8149242d0.jpg',fallowed:false, fullName: 'Olga', status: 'I love e39',location: {city: 'Kiev', cantry: 'Ukraine'} },
    ]
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
            return {...state, users: [...state.users, ...action.users]} 
        }
        default: 
            return state;

    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId});
export const unfollowAC = (userId) => ({ type: UN_FOLLOW, userId});
export const setUsersAC = (users) => ({ type: SET_USERS, users});

export default UsersReducer;
//профильпейдж удалил, т.к функция сразу даст что надо