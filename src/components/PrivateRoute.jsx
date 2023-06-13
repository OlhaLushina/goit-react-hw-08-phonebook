import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/* Якщо користувач не залогінений і не рефрешиться, то перенаправити його  */
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
