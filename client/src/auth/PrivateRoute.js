import { Navigate } from 'react-router-dom';
import { useAuthState } from './AuthContext.js'

const PrivateRoute = ({ children }) => {
  const { user } = useAuthState();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;