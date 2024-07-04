import { createContext, useReducer, useEffect } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/Firebase/firebase.utils";

import { createAction } from "../utils/Reducer/reducer.utils";

export const UserContext = createContext({
    CurrentUser: null,
    SetCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

export const UserReducer = (state, action) => {
    console.log('dispatched');
    console.log(action);
    const {type, payload} = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                CurrentUser: payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null,
}

export const UserProvider = ({children}) => {
    const [{ CurrentUser }, dispatch] = useReducer(UserReducer, INITIAL_STATE)
    console.log(CurrentUser);

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }
    
    const value = {CurrentUser, setCurrentUser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
};


