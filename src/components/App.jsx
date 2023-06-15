import { GlobalStyle } from './GlobalStyle';
import { UserRouters } from './UserRouters';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {/* Глобальні стилі */}
      <GlobalStyle />
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        /* Список маршрутів */
        <UserRouters />
      )}
    </>
  );
};
