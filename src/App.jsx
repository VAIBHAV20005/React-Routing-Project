import React from "react";
import { Link,RouterProvider,createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";


function App(){
  const router = createBrowserRouter([
    {
      path:'/',
      element:<> <Navbar/> <Home/> </>
    },
    {
      path:'/about',
      element:<> <Navbar/> <About/> </>
    },
    {
      path:'/contact',
      element:<> <Navbar/> <Contact/> </>
    }
  ])
  return(
    <>
 
     
      <RouterProvider router={router}/>

    </>
  )
}

export default App;