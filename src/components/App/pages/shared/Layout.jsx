import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
  gridTemplateRows: "4rem 1fr 4rem",
  gridTemplateAreas: `
    "nav nav"
    "sidebar main"
    "footer footer"
  `,
  height: "100vh",
};

const mainStyle = {
  gridArea: "main",
  padding: "1rem",
  backgroundColor: "#555",
  color: "#f2f2f2"
};

const Layout = () => {
  return (
    <div style={gridStyle}>
      <Navbar loggedIn />
      <Sidebar />
      <main style={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
