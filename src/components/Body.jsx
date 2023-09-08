import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"

const Body = () => {
  return (
    <>
    <Header />
      <div>
      <Outlet />
    </div>
    </>

  );
};

export default Body;