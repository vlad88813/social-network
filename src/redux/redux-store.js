import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    ProfilePage:profileReducer,
    MessagesPage:dialogsReducer,
    sidebar:sidebarReducer
})

let store = createStore(reducers);

export default store;