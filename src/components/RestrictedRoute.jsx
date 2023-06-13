import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/* Дозволяє залогованного користувача перенаправити зі сторінок логіна та регістрації */
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
