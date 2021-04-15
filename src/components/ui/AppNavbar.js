import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utilies/fontawesome";
import React, { Fragment, useState } from "react";
import { Avatar } from "react-lorem-ipsum";

import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Burger } from "./appnavbar/Burger";
import { Bag } from "./appnavbar/Bag";

export const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const authorisedLink = (
    <Fragment>
      <Nav navbar>
        <NavItem>
          <p>
            <Avatar
              gender="male"
              className="avatar border rounded-circle"
              width="40"
              height="40"
              alt="Avatar"
            />
            <span className="ml-4">
              Log out <FontAwesomeIcon classname="m-2" icon="sign-out-alt" />
            </span>
          </p>
        </NavItem>
      </Nav>
    </Fragment>
  );

  const guestlink = (
    <Fragment>
      <Nav navbar>
        <NavItem>
          <p>
            <span className="mr-4">
              Login <FontAwesomeIcon classname="m-2" icon="sign-in-alt" />
            </span>
            <FontAwesomeIcon classname="m-2" icon="user-plus" />
          </p>
        </NavItem>
      </Nav>
    </Fragment>
  );

  return (
    <div className="mb-4 sticky-top nav-Container">
      <Navbar
        color="primary"
        light
        expand="md"
        className="d-flex justify-content-between"
      >
        <NavbarBrand href="/">
          <h1>S<FontAwesomeIcon icon="shopping-bag"  className="fa-ms" />ko</h1>
    <span></span>

        </NavbarBrand>
        <Nav className="w-75" navbar>
          <NavItem className="w-75 mr-2">
            <input
              type="search"
              className="form-control "
              placeholder="Search"
            />
          </NavItem>
          <FontAwesomeIcon icon="search" className='search' />
        </Nav>
        <div className='log'>

        {!isOpen ? guestlink : authorisedLink}
        </div>
      </Navbar>
      <div className='burgerBag shadow'>
        <Burger />
        <Bag />
    </div>
    </div>
  );
};
