import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            dolla
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="discover"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                Dicover
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="services"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="signup"
                smooth
                duration={500}
                spy
                exact="true"
                offset={80}
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/signin">Sing In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
