import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Main } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <footer></footer>
    </div>
  );
};
