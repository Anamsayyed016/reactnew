import React from "react";
import { Outlet, Link} from "react-router-dom";

const Navbar = () =>{

        return(
        <>
        <div>
            <h1>Logo</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/user'>User</Link></li>
                <li><Link to='/user/1'>User 1</Link></li>
                <li><Link to='/user/2'>User 2</Link></li>
                <li><Link to='/user/3'>User 3</Link></li>
            </ul>
        </div>

        <Outlet/>
        </>
)
}
 export default Navbar