import {createContext} from "react";

function noop() {
}

export const AuthContext = createContext({
    token: null,
    userId: null,
    userEmail: null,
    logIn: noop,
    logOut: noop,
    isAuthenticated: false
})

