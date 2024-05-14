import { createContext, useState, useEffect } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/Firebase/firebase.utils";

export const UserContext = createContext({
    CurrentUser: null,
    SetCurrentUser: () => null
});

export const UserProvider = ({children}) => {
    const [CurrentUser, SetCurrentUser] = useState(null);
    const value = {CurrentUser, SetCurrentUser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            SetCurrentUser(user);
        })

        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}