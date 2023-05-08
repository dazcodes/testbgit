import React, { useState, useEffect } from "react";
import Menu from "../components/menu";

// const SayHi = () => {
//   alert("hi");
// };

const Navbar = () => {
  const [number, setNumber] = useState(20);
  const [name, setName] = useState("User (Default)");
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [num, setNum] = useState(8);
  const [extra, setExtra] = useState("extra");

  useEffect(() => {
    //handles component mounting and updating so ComponenetDidMount and ComoponentDidUpdate
    alert("Hello");

    return () => {
      //handles component unmounting ComponentWillUnmount
    };
  }, [num]);

  return (
    <nav className="py-4 bg-light nav-bar">
      <div className="container">
        <img
          width="70px"
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
        />
        <Menu />
        <button> Hello {name}</button>
        <button onClick={() => setName("Dara")}> change user</button>
        <button onClick={() => setNumber(number - 1)}>-</button>
        <button onClick={() => setNumber(number + 1)}>+ </button>
      </div>
    </nav>
  );
};

export default Navbar;
