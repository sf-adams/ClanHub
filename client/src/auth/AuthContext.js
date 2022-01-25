import React, {useContext, useState, useEffect} from 'react';
import { auth } from './firebase-config'


const AuthContext = React.createContext()

// This is a custom hook for exporting the auth context to the rest of the application
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true);

  function signup(email, password) {
    console.log("hello")
    return auth.createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe
  }, [])

  

    const value = {
        currentUser,
        signup
    }
  return(
    <AuthContext.Provider value={value} >
        {!loading && children}
    </AuthContext.Provider>
  )
};
