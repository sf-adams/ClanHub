import { Route, Navigate } from 'react-router-dom';
import { useAuthState } from './AuthContext.js'

export const UnauthenticatedRoute = ({ element: E, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        !isAuthenticated ? <E {...routeProps} /> : <Navigate to="/" />
      }
    />
  )
}