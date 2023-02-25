import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  margin-bottom: 40px;
  font-size: xxx-large;
`;

export const Nav = styled.nav`
  padding: 5px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 25px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: larger;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  padding: 15px;

  &.active {
    color: white;
    border-radius: 20px;
    background-color: #754f87;

    color: wite;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #754f87;
    text-shadow: 0px 0px 17px rgba(0, 0, 0, 1);
  }
`;
