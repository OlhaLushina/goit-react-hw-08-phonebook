import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Item, List, Main, NavLink } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <List>
          <Item>
            <NavLink to="/">Home</NavLink>
          </Item>
          <Item>
            <NavLink to="/contacts">Contacts</NavLink>
          </Item>
          <Item>
            <NavLink to="/login">Login</NavLink>
          </Item>
          <Item>
            <NavLink to="/register">Register</NavLink>
          </Item>
        </List>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <footer></footer>
    </div>
  );
};
