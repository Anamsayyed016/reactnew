import { Link , Outlet, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";


const Layout = ()=>{

    return(
        <>
                <div className="nav-nav-navbar">
                        <nav>
                            <ul>
                                <li><Link to= '/'>Home</Link></li>
                                <li><Link to='collection'>Collection</Link></li>
                            <img src="/imgvid/logo3.png" alt="" />
                                <li><Link to='sale'>Sale</Link></li>
                                {/* <li><Link to='login'>Login</Link></li> */}
                                <li><Link to='create'>Create</Link></li>
                                {/* <li><Link to='cusdetails'>Customer</Link></li> */}
                                
                                
                            
                            <li className="search-box"> <input type="text" placeholder="search" /><CiSearch className="search-icon"   /></li>
                                
                                 
                                <FaUsers  className="user-icon"/>
                    
                                <IoBagCheckSharp className="bag-icon"/>
                                </ul>
                        </nav>
                        <Outlet/>
                </div>
                
        </>
    )
}

export default Layout