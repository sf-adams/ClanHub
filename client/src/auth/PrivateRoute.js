import { Navigate } from 'react-router-dom';
import { useAuthState } from './AuthContext.js'

const PrivateRoute = ({ children }) => {
  const { user } = useAuthState();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;