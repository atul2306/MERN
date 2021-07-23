import { NavLink, useHistory } from "react-router-dom";
import React, { useState } from "react"
//  import sigpic from "../images/1.png"

const Signup = () => {
  const history = useHistory()
  const [userdata, setdata] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });
  let name,value;
  const handleinput = (e) => {
    // form me name aur value hona must hai
    name=e.target.name
    value=e.target.value
    setdata({ ...userdata, [e.target.name]: e.target.value })

  }
  // const postdata= async(e)=>{
  //    prevent default krte hai taaki page refresh na ho
  //   e.preventDefault();
  //       const{name, email, phone, work, password, cpassword}=userdata;
  //    const res= await fetch("/register",{
  //      method:"POST",
  //      headers:{
  //        "Content-Type":"application/json"
  //      },
  //      body:JSON.stringify({
  //       name, email, phone, work, password, cpassword
  //      })
  //    });
  // }

  // const [userdata, setdata] = useState({
  //   name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  // });
  // let name,value;
  // const handleinput=(e)=>{
  //     console.log(e)
  //    name=e.target.name;
  //    value=e.target.value;
  //    setdata({...userdata,[name]:value})

  // }
  const postdata =async (e)=>{
    e.preventDefault();
    const{name, email, phone, work, password, cpassword}=userdata;
     const res= await fetch("/register",{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({
        name, email, phone, work, password, cpassword
       })
     });
     const data=await res.json();
     if(res.status === 422 || !data){
       window.alert("Invalid Registraton");
       console.log("invalid")
     }
     else{
      window.alert("success Registraton");
      console.log("success")
       history.push("/login")
     }
     
  }
  return (
    <>

      <div className="scontainer1">
        <div className="sform-1">
          <div className="sform-2">
            <h2 style={{ fontStyle: "italic" }} >REGISTRATION</h2>
            <form method="POST" className="s-form">
              <div className="s-saame">
                <i style={{ color: "violet" }} className="zmdi zmdi-account material-icons-name"></i>
                <input
                  className="s-son1"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={userdata.name}
                  onChange={handleinput}
                  autoComplete="off"


                />
              </div>
              <div className="s-sa4ame">
                <i style={{ color: "violet" }} className="zmdi zmdi-email material-icons-name"></i>
                <input
                  className="s-son1"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={userdata.email}
                  onChange={handleinput}
                  autoComplete="off"

                />
              </div>
              <div className="s-saaame">
                <i style={{ color: "violet" }} className="zmdi zmdi-phone material-icons-name"></i>
                <input
                  className="s-son1"
                  type="phone"
                  placeholder="Phone"
                  name="phone"
                  value={userdata.phone}
                  onChange={handleinput}
                  autoComplete="off"

                />
              </div>
              <div className="s-saaaame">
                <i style={{ color: "violet" }} className="zmdi zmdi-account material-icons-name"></i>
                <input
                  className="s-son1"
                  type="text"
                  placeholder="Work"
                  name="work"
                  value={userdata.work}
                  onChange={handleinput}
                  autoComplete="off"

                />
              </div>
              <div className="s-sa1ame">
                <i style={{ color: "violet" }} className="zmdi zmdi-lock material-icons-name"></i>
                <input
                  className="s-son1"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={userdata.password}
                  onChange={handleinput}
                  autoComplete="off"

                />
              </div>
              <div className="s-sa2ame">
                <i style={{ color: "violet" }} className="zmdi zmdi-lock material-icons-name"></i>
                <input
                  className="s-son1"
                  type="password"
                  placeholder="Cpassword"
                  name="cpassword"
                  value={userdata.cpassword}
                  onChange={handleinput}
                  autoComplete="off"

                />
              </div>
              <input
                className="l-btar"
                type="button"
                value="Register"
                onClick={postdata}
              />
            </form>

          </div>

        </div>
        {/* <img className="s-img" src={sigpic} alt="agsg"/> */}
        <h3 style={{ color: "chocolate" }}>Already Registered? <NavLink style={{ fontStyle: "normal" }} to="/login">Login</NavLink></h3>

      </div>
    </>
  );
}
export default Signup


{/* <input
                ty
              />
              <input
                ty
              />
              <input
                ty
              /> */}