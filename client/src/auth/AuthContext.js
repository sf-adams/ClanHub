import React, {useContext} from 'react';

const AuthContext = React.createContext()

// This is a custom hook for exporting the auth context to the rest of the application
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider() {
    const [currentUser, setCurrentUser] =

    const value = {
        currentUser
    }
  return(
    <AuthContext.Provider value>
        {children}
    </AuthContext.Provider>
  )   
};
