import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';



// create AuthContext;
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null); // set user state for get the current user

  // create user with email and password
  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // set authInfo object with multiple value
  const authInfo = {
    user,
    setUser,
    createUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;