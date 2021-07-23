import React, { useState } from "react"
import { NavLink ,useHistory } from "react-router-dom";
import "./style/login.css"
const Login = () => {
  const history = useHistory()
  const [newlogin, updatelogin] = useState({
    email: "",
    password: ""
  })
  const comelogin=(e)=>{
     updatelogin({...newlogin,[e.target.name]:e.target.value})
  }
  const letsclick=async(e)=>{
    e.preventDefault();
    const {email,password}=newlogin;
    // fetch api ke method se backend me bhejo
    const res= await fetch("/login",{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify({
         email,password
      })

    })
     const ans= await res.json();
     if(res.status===404 || !ans) {
       window.alert("invalid credential")
     }
     else{
      window.alert("login successfull")
      history.push("/")
     }
     
  }

  return (
    <>
      <div className="lcontainer">
        <div className="lconta">
          <div className="lcon">
            <div className="log">
              <i style={{ fontSize: "4rem" }} className="zmdi zmdi-account-circle material-icons-name"></i>
              <h1>SignIn</h1>
              <p>Login Using Email And Password</p>
              <form className="lo">
                <div className="laat">
                  <i className="zmdi zmdi-email material-icons-name"></i>
                  <input

                    className="lin"
                    type="email"
                    name="email"
                    value={newlogin.email}
                    onChange={comelogin}
                    placeholder="EMAIL"
                    autoComplete="off"
                  />
                </div>

                <div className="lome">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                  <input
                    className="lin"
                    type="password"
                    name="password"
                    value={newlogin.password}
                    onChange={comelogin}
                    placeholder="PASSWORD"
                    autoComplete="off"
                  />

                </div>
                <div className="lone">
                  <input
                    type="checkbox"
                    id="one"

                  />
                  <label for="one">Remember me</label>
                </div>
                <input
                  className="lbuttin"
                  type="button"
                  value="LOGIN"
                  onClick={letsclick}
                />
              </form>
              <div className="llast">
                <p>Forgot Password?</p>
                <NavLink style={{ color: "black" }} to="/signup">Not registered?Click to register</NavLink>
              </div>
            </div>







          </div>
        </div>
      </div>
    </>
  );
}
export default Login