import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;
