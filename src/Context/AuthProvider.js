import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const information = {
        providerLogin
    }
    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;