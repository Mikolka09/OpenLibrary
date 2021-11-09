import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
    user: userReducer,
    books: bookReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));