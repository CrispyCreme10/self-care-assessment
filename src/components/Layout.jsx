import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <>
      <div className="Layout">
        <Link to="/" className="item">Home</Link>
        <Link to="/new-assessment" className="item">New Assessment</Link>
      </div>

      <Outlet />
    </>
  )
};

export default Layout