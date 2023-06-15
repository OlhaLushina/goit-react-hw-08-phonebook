import styled from 'styled-components';
import { NavLink as NavLinkStyled } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const NavLink = styled(NavLinkStyled)`
  color: #1a365d;
  text-decoration: none;

  &:hover {
    color: #2b6cb0;
  }
`;
