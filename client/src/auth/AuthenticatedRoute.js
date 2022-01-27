import { Route, Navigate } from 'react-router-dom';
import { useAuthState } from './AuthContext.js'

export const AuthenticatedRoute = ({ element: E, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <E {...routeProps} /> : <Navigate to="/login" />
      }
    />
  )
}