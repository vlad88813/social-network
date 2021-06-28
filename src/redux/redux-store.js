import { applyMiddleware, combineReducers, createStore } from "redux";
import AuthenticationReducer from "./Authentication-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import UsersReducer from "./Users-reducer";
import thunkMiddleWare from 'redux-thunk';


let reducers = combineReducers({
    ProfilePage:profileReducer,
    MessagesPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:UsersReducer,
    auth:AuthenticationReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

// store.subscribe(()=>console.log(store.getState()));

window.store = store;

export default store;