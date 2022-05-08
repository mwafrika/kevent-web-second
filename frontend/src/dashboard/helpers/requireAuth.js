import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const {
    user: {
      authUser: { role },
    },
    isLoggedIn,
  } = useSelector((state) => state?.user);

  const location = useLocation();

  return allowedRoles.indexOf(role) > -1 ? (
    <Outlet />
  ) : isLoggedIn ? (
    <Navigate to='/unauthorized' state={{ from: location }} replace />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
