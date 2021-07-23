import { Route ,Switch } from "react-router-dom"
import "./App.css"
import "../src/component/style/signup.css"
import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import About from "./component/About"
import Contact from "./component/Contact"
import Home from "./component/Home"
import Login from "./component/Login"
import Navbar from "./component/Navbar"
import Signup from "./component/Signup"
import Error from "./component/Error"
const App=()=>{
  return ( 
   <>
   <Navbar/> 
   <Switch>
   <Route exact path="/"><Home/> </Route>
   <Route  path="/about"><About/></Route>
   
   
   <Route path="/contact"><Contact/> </Route>
   
   <Route path="/login"><Login/> </Route>
   <Route path="/signup"> <Signup/></Route>
   <Route><Error/></Route>
   </Switch>
</>
  );
}
export default App