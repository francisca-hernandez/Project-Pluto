import React from 'react';

//Css

import {
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
  } from 'reactstrap'

  function Navbar(_props) {

return (

    <Nav tabs>
      <NavbarBrand

        style={{
          marginTop: '10px',
          marginLeft: '10px',
          marginBottom:'50px',
          fixedPosition: 'fixed',
          fontSize: '30px',
          marginRight: '900px',
          color: "#284f67",

        }}
      >
    <h1>Project Pluto</h1>
        
      </NavbarBrand>

      <NavItem >
        <NavLink
          style={{
            color: "#195c83",
            fontWeight: "bold"

          }}
          href="/home">Home</NavLink>

      </NavItem>

      
      <NavItem >
        <NavLink
          style={{
            color: "#195c83",
            fontWeight: "bold"

          }}
          href="/products">Products</NavLink>

      </NavItem>

      <NavItem>

    <NavLink
          style={{
            color: "#195c83",
            fontWeight: "bold",

          }}
          href=" /about">About</NavLink>

      </NavItem>
      <NavItem>
       
        <NavLink
          style={{
            color: "#195c83",
            fontWeight: "bold",

          }}

          href="/contact">Contact</NavLink>
        </NavItem>

    </Nav>
  )
};

export default Navbar;