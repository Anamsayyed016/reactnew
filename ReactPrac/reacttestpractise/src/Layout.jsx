import React from "react";
import { Link,Outlet } from "react-router-dom";

const Layout = () =>{

    return(
        <>
               
                    
                   <li> <Link to='/'>Home</Link> </li>
                  <li> <Link to='services'>Services</Link></li> 
                

                <Outlet/>
        </>
    )
}

export default Layout