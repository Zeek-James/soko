import React from 'react'
import { Nav, NavLink, NavItem } from "reactstrap";
export const LeftNav = ({burger, toggle}) => {
    return (
        <div className={!burger ? "menu-Container" : "menu-Container show"}>
        <div className={!burger ? "menu" : "menu show"}>
          <h3 className="welcome" color="">
            Hello, Sign in
          </h3>
          <div className="nav-cat">
            <h4>Categories</h4>
            <Nav vertical>
        <NavItem>
          <NavLink href="#">Electronics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Face Mask</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Fresh Food</NavLink>
              </NavItem>
              <NavItem>
          <NavLink href="#">Kids</NavLink>
        </NavItem>        <NavItem>
          <NavLink href="#">Grocery</NavLink>
        </NavItem>        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
      </Nav>
          </div>
        </div>
        <div className="bg" onClick={toggle}></div>

      </div>
    )
}
