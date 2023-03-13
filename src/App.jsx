import { BrowserRouter } from "react-router-dom"
import {About,Navbar} from './components'
import './App.css'

import AnimatedRoutes from "./components/AnimatedRoutes";
import { useEffect } from "react";
const App = () => {


  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", customizeCursor);
    
    function customizeCursor(e) {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    }
  }, [])
  

  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat  bg-top ">
   <div className="cursor">
      <div className="point">
        
      </div>
    </div>

   <BrowserRouter>
 
   <Navbar/>
   <AnimatedRoutes/>
   </BrowserRouter>
  </div>
  )





}


export default App
