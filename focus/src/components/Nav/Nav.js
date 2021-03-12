import React from "react";
import {
  NavItem,
  NavItemLink,
  NavList,
  NavLogo,
  NavContainer,
  Navbar,
} from "./Nav.elements";

const Nav = (props) => {
  return (
    <NavContainer>
      <Navbar>
        <NavLogo>AF</NavLogo>
        <NavList>
          <NavItem>
            <NavItemLink href="#projects">Projects</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="#experience">Experience</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="#about">About</NavItemLink>
          </NavItem>
        </NavList>
      </Navbar>
    </NavContainer>
  );
};

export default Nav;
