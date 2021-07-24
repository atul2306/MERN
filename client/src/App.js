import { Route ,Switch } from "react-router-dom"
import "./App.css"
import "../src/component/style/signup.css"
import "bootstrap/dist/css/bootstrap.css"
import React, { createContext, useReducer } from "react"
import About from "./component/About"
import Contact from "./component/Contact"
import Home from "./component/Home"
import Login from "./component/Login"
import Navbar from "./component/Navbar"
import Signup from "./component/Signup"
import Error from "./component/Error"
import Logout from "./component/Logout"
// ye sb logout toggle ke lie krna pd rha hai
import {initialState,reducer} from "../src/reducer/usereducer"
export const userContext = createContext();

const App=()=>{
  // 1) context API
  // ye state ka advantage hai khi b use kr sktehai
  const [state,dispatch]=useReducer(reducer,initialState)
  return ( 
    
   <>
   <userContext.Provider value={{state,dispatch}}>
   <Navbar/> 
   <Switch>
   <Route exact path="/"><Home/> </Route>
   <Route  path="/about"><About/></Route>
   
   
   <Route path="/contact"><Contact/> </Route>
   
   <Route path="/login"><Login/> </Route>
   <Route path="/signup"> <Signup/></Route>
   <Route path="/logout"><Logout/></Route>
   <Route><Error/></Route>
   </Switch>
   </userContext.Provider>
</>
  );
}
export default App