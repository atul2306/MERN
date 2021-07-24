import { NavLink } from "react-router-dom";
import React, { useContext } from "react"
import "bootstrap/dist/css/bootstrap.css"
import logo from "../images/th3.jpg"
import { userContext } from "../App";
const Navbar = () => {
  const { state, dispatch } = useContext(userContext)
  const Rendermenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
          </li>
       
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
        </>
      )
    }
    else{
      return (
        <>
         <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
          </li>
         <li className="nav-item">
              <NavLink className="nav-link" to="/Login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Signup">Registration</NavLink>
            </li>
        </>
      )
    }
  }
  return (
    <>

      <nav className="navbar navbar-expand-lg fixed-top ">
        <NavLink className="navbar-brand" to="#"><img src={logo} /></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 d-flex justify-content-end">
            <Rendermenu/>
          </ul>
        </div>
      </nav>

    </>
  );
}
export default Navbar