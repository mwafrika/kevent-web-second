import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  // const {
  //   user: {
  //     authUser: { role },
  //   },
  //   isLoggedIn,
  // } = useSelector((state) => state?.user);

  const { role } = useSelector((state) => state?.user?.authUser);
  const { isLoggedIn } = useSelector((state) => state?.user);
  console.log('role', role);
  console.log('isLoggedIn', isLoggedIn);

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
