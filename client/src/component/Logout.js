import React ,{useContext,useEffect,useState} from "react"
import { useHistory } from "react-router-dom";
import { userContext } from "../App";
const Logout=()=>{
    const {state,dispatch}= useContext(userContext)
    const history=useHistory()
    // ye kaam backend se ke iss page ke frontend ke iss page se backend ko connect  krne ke lie kia jata
    const [logout, setlogout] = useState({});

    const callAbout = async () => {
      try {
        const res = await fetch("/logout", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
  
          },
          credentials: "include"
        });
        const data = await res.json()
        console.log(data)
        setlogout(data);
        console.log(data);
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        dispatch({type:"USER",payload:false})
        console.log(err)
        history.push("/login")
      }
    }
    useEffect(() => {
      callAbout()
    }, []);
  

    return (
<>
<h1>Logout ka page</h1>
</>
    );
}
export default Logout
