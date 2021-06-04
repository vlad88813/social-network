import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import UsersReducer from "./Users-reducer";

let reducers = combineReducers({
    ProfilePage:profileReducer,
    MessagesPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:UsersReducer
})

let store = createStore(reducers);

window.store = store;

export default store;