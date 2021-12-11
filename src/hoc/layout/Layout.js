import React from "react";
import { NavLink } from "react-router-dom";
import './Layout.css'
const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="navlinks">
      <h1>
        <NavLink to="/">Create</NavLink>
      </h1>

      <h1>
        <NavLink to="/information">Update Information</NavLink>
      </h1>
      <h1>
        <NavLink to="/view-all">View All</NavLink>
      </h1>
      <h1>
        <NavLink to="/update-contact">Update Contact</NavLink>
      </h1>
      <h1>
        {/* <NavLink to="/Update">Update</NavLink> */}
      </h1>
      </div>
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
