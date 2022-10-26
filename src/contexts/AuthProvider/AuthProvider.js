import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';



// create AuthContext;
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null); // set user state for get the current user
  const [loading, setLoading] = useState(true);

  // create user with email and password
  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // log in user with email and password
  const logInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // sign out user
  const logOutUser = () =>{
    return signOut(auth);
  }

  // google sign in method
  const googleSignIn = provider =>{
    return signInWithPopup(auth, provider);
  }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setLoading(false);
      setUser(currentUser);
    })

    return () => unsubscribe();
  }, [])

  // set authInfo object with multiple value
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    logInUser,
    logOutUser,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;