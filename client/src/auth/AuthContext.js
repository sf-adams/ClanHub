import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
 } from '@firebase/auth';
import { useState, useEffect, useContext, createContext } from 'react';
import { auth } from './firebase-config';

// Holding the state of the user that is currently signed in
export const AuthContext = createContext();

// Pass in the state
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  // When a component is unmounted, we will want to make sure that we unsubscribe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth", currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Passing in the state as a value
  return (
    <AuthContext.Provider
      value={{ user, logIn, signUp, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// This function returns the context, default sent to
export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
}
