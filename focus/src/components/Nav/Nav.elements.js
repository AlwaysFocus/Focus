import styled from "styled-components";

export const NavContainer = styled.div`
  background: black;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2;
`;

export const Navbar = styled.nav`
  width: 80%;
  margin: auto;
  min-height: 10vh;
  padding: 3rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.h1`
  flex: 3;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 6rem;
    height: 6rem;
    background: #d90429;
    border-radius: 50%;
    transform: translate(-30%, -17%);
    mix-blend-mode: screen;
  }

  @media screen and (max-width: 1200px) {
    flex: 1;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  list-style: none;
`;

export const NavItem = styled.li`
  @media screen and (max-width: 1200px) {
    margin-left: 5rem;
  }
`;

export const NavButton = styled.li`
  background: #d90429;
  padding: 1rem 2 rem;
  border-radius: 2rem;
`;

export const NavItemLink = styled.a``;
