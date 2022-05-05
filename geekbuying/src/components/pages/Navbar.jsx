import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
        {/* keep all the NavLinks here */}
        <div>
        <NavLink to="/home">Home</NavLink>
        </div>
        <div>
        <NavLink to="/about">About</NavLink>
        </div>
        <div>
        <NavLink to="/books">Books</NavLink>
        </div>
        <div>
        <NavLink to="/login">Login</NavLink>
        {/* {token?(<NavLink to="/logout">Logout</NavLink>):<NavLink to="/login">Login</NavLink>} */}
        </div>
      </nav>
    </>
  );
};
