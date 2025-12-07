import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import logo from "/fortis-logo.svg";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <div className="h-[100px]"></div>
      <header className="z-50 shadow-lg fixed top-0 left-0 right-0 bg-white">
        <Navbar className="container mx-auto" fluid>
          <NavbarBrand href="/#home">
            <img src={logo} className="mr-3 h-12" alt="Agnus Dei logo" />
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavLink to={"login"}>
              <NavbarLink
                as="div"
                className="transition-all after:duration-300 hover:text-cyan-400! after:opacity-0 after:h-0.5 after:w-0.5 
      after:bg-cyan-400 after:block hover:after:opacity-100
      hover:after:w-full"
                href="/login"
              >
                Login
              </NavbarLink>
            </NavLink>
          </NavbarCollapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
