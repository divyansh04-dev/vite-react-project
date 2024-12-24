import React, { useEffect } from "react";

// run in every render
const Nav = ({ color }) => {
  useEffect(() => {
    alert("Run in every render");
  });

  // run when the color is changed
  useEffect(() => {
    alert("BG change");
  }, [color]);

  return <div>Navbar with color: {color}</div>;
};

export default Nav;
