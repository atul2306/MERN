import React, { useEffect, useState } from "react"
import "./style/home.css"
import "../index.css"
const Home = () => {
  const [checkname, setcheck] = useState("")
  const [show,setshow]=useState(false)
  const userHome = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {

          "Content-Type": "application/json"

        },

      });
      const data = await res.json()
      console.log(data)
      setcheck( data.name);
      setshow(true)

    } catch (err) {
      console.log(err)

    }
  }
  useEffect(() => {
    userHome();
  }, []);
  return (
    <>
      <div className="H-container">
        <h2 style={{ color: "#ffc107" }}>WELCOME {checkname}</h2>
        
        <h2 style={{ color: "darkblue" }}>{show?`HAPPY to see you back`:`WE ARE THE MERN DEVELOPER`}</h2>
      </div>
    </>
  );
}
export default Home



// <div className="container">
    // <div className="first" >
    // <p>WELCOME</p>
    // <h1>We are the Mern Devloper</h1>
    // </div>
    // </div>