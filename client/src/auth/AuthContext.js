import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useState, useEffect, useContext, createContext } from 'react';
import { auth } from './firebase-config';

// Holding the state of the user that is currently signed in
export const AuthContext = createContext();

// Pass in the state
export const AuthContextProvider = props => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

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
  return <AuthContext.Provider value={{ user, error }} {...props} />;
}

// This function returns the context, default sent to
export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
}
