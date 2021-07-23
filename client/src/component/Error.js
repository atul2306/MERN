import React from "react"
import { NavLink } from "react-router-dom";
import "./style/error.css"
const Error = () => {
    return (
        <>
            <div className="E-container">
            <h1 id="E-id" style={{fontSize:"6rem"}}>404</h1>
                <div className="E-containe">
                   <h1>WE ARE SORRY, PAGE NOT FOUND</h1> 
                   <p style={{fontStyle:"italic"}}>The page you are looking for might have been removed had its name changed or is temporarily unavailable </p> 
                   <NavLink to="/"><button className="E-btn" style={{textDecoration:"none"}}>BACK TO HOME</button></NavLink>
                </div>
            </div>
        </>
    );
}
export default Error