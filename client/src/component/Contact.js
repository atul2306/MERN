import React ,{useEffect,useState} from "react"
import "./style/contact.css"
const Contact = () => {
  

  const [check, setcheck] = useState({
    name:"",email:"",phone:"",message:""
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          
          "Content-Type": "application/json"

        },
        
      });
      const data = await res.json()
      console.log(data)
      setcheck({...check,name:data.name,email:data.email,phone:data.phone});
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err)
      
    }
  }
  useEffect(() => {
    userContact();
  }, []);

  const handle=(e)=>{
     setcheck({...check,[e.target.name]:e.target.value})
  }
  // send the data to backend
  const click1= async(e)=>{
     e.preventDefault();
     const {name,email,phone,message}=check;
    const res= await fetch("/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone ,message
      })
      
    })
    const data2= await res.json();
    if(!data2) {
      alert("write message first")
      console.log("message not send")
    }
    else{
      alert("message sent")
       setcheck({...check,message:""});
    }
  }
  return (
    <>

      <div className="c-container">
        <div className="c-contain">
          <div className="c-cont">
            <h2>GET IN TOUCH</h2>
            <p>connect with anyone and solve your problem</p>
            <div className="c-co">
              <div className="c-form1">
                <h3>Drop a Message</h3>
                <form method="POST" className="c-form3" >
                  <div className="c-form4">
                    <i style={{ color: "violet" }} className="zmdi zmdi-account material-icons-name"></i>
                    <input
                      type="text"
                      value={check.name}
                      onChange={handle}
                      name="name"
                      placeholder="Fullname"
                      required="true"
                      className="c-st1"
                    />
                  </div>

                  <div className="c-form4">
                    <i style={{ color: "violet" }} className="zmdi zmdi-phone material-icons-name"></i>
                    <input
                      type="phone"
                      value={check.phone}
                      onChange={handle}
                      placeholder="Phone"
                      required="true"
                      className="c-st1"
                    />
                  </div>


                  <div className="c-form4">
                    <i style={{ color: "violet" }} className="zmdi zmdi-email material-icons-name"></i>
                    <input
                      type="email"
                      name="email"
                      value={check.email}
                      onChange={handle}
                      placeholder="Email"
                      required="true"
                      className="c-st1"
                    />
                  </div>


                  <div className="c-form4">
                    <i style={{ color: "violet" }} className="zmdi zmdi-email material-icons-name"></i>
                    <input 
                    style={{color:"red"}}
                      type="text"
                      name="message"
                      value={check.message}
                      onChange={handle}
                      placeholder="Message"
                      required="true"
                      className="c-st1"
                    />
                  </div>
                  <button onClick={click1} className="c-btn">Send</button>
                </form>

              </div>
              <div className="c-form2">
                <div className="c-altos">
                  <p style={{ fontSize: "1%" }} style={{ color: "#dc3545" }}>Contact Information</p>
                  <section className="c-sect">
                  <div className="c-1sect">
                      <i style={{ fontSize: "1.3rem" }}  className="zmdi zmdi-phone material-icons-name"></i>
                      <h3 style={{marginLeft:"6%"}}>Phone</h3>

                    </div>
                    <div className="c-1sect">
                      <i style={{ fontSize: "1.3rem" }}  className="zmdi zmdi-email material-icons-name"></i>
                      <h3 style={{marginLeft:"6%"}}>Phone</h3>

                    </div>
                    <div className="c-1sect">
                      <i style={{ fontSize: "1.3rem" }}  className="zmdi zmdi-phone material-icons-name"></i>
                      <h3 style={{marginLeft:"6%"}}  >Address</h3>

                    </div>
                  </section>



                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-conner">

        </div>
      </div>
    </>
  );
}
export default Contact