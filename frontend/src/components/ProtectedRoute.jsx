<<<<<<< HEAD

=======
import { Navigate } from 'react-router-dom';
import { getToken, getUser } from '../utils/auth';
>>>>>>> 9dd38e9b3a4ca8e38ba34f74a48406760b8cf6e6

const ProtectedRoute = ({ children, role }) => {
  const token = getToken();
  const user = getUser();

  const isLoggedIn = token && user;
  const hasRequiredRole = role ? user?.role === role : true;

  if (!isLoggedIn) return <Navigate to="/auth" replace />;
  if (!hasRequiredRole) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
