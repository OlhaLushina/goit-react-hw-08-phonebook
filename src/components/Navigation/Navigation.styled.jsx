import styled from 'styled-components';
import { NavLink as NavLinkStyled } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavLink = styled(NavLinkStyled)`
  display: inline-block;
  height: 100%;
  color: #1a365d;
  text-decoration: none;

  &:hover {
    color: #2b6cb0;
  }
`;
