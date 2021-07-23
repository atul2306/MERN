import React, { useEffect, useState } from "react"
import "./style/about.css"
import logo from "../images/ran.jpg"
// import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"

const About = () => {
  const history = useHistory();

  const [check, setcheck] = useState({});

  const callAbout = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"

        },
        credentials: "include"
      });
      const data = await res.json()
      console.log(data)
      setcheck(data);
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err)
      history.push("/login")
    }
  }
  useEffect(() => {
    callAbout()
  }, []);


  return (
    <>


      <div className="A-container">
        <div className="A-contain">
          <div className="A-conta">
            <div className="A-cont"><img src={logo} />
              <div style={{ width: "100%" }}>
                <p style={{ marginBottom: "1%" }}>Instagram</p>
                <p style={{ marginBottom: "1%" }}>Instagram</p>
                <p style={{ marginBottom: "1%" }}>Instagram</p>
                <p style={{ marginBottom: "1%" }}>Instagram</p>
                <p style={{ marginBottom: "1%" }}>Instagram</p>



              </div>
            </div>
            <div method="GET" className="A-co">
              <div className="A-c">
                <div className="A-st" style={{ flexDirection: "row" }}>
                  <h2 >{check.name}</h2>
                  <p style={{ marginBottom: "-0.4%" }}>{check.work}</p>
                  <p >Jharkhand</p>

                </div>
                <div className="A">
                  <button style={{ borderRadius: "0.7rem" }} value="REGISTER">EDIT</button>
                </div>
              </div>
              <div className="A-table">
                <table className="A-tab" style={{ width: "100%" }}>
                  <tr >
                    <td>UserId</td>
                    <td>{check._id}</td>
                  </tr>


                  <tr >
                    <td>Name</td>
                    <td>{check.name}</td>
                  </tr>

                  <tr >
                    <td>Email</td>
                    <td>{check.email}</td>
                  </tr>
                  <tr >
                    <td>Mobile</td>
                    <td>{check.phone}</td>
                  </tr>
                  <tr >
                    <td>Profession</td>
                    <td>{check.work}</td>
                  </tr>
                </table>
              </div>
            </div>

          </div>



        </div>



      </div>
    </>
  );
}
export default About