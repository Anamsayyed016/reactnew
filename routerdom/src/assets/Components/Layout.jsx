import { Link ,Outlet } from "react-router-dom"
const Layout=()=>{
    return(
        <>
            <nav className="Nav-nav-bar">
                <h1>Logo</h1>
                <ul>
                    <li> <Link to='/' className="url">Home</Link></li>
                    <li> <Link to='about' className="url">About</Link> </li>
                    <li> <Link to='contact' className="url">Contact</Link> </li>
                    <li> <Link to='gallery' className="url">Gallery</Link> </li>
                </ul>
            </nav>

                <div>
                    About <br />

                        <button  > 
                            <Link to='about'>
                            Go to services
                            </Link>
                            </button>
                            
                            <button>
                                <Link to='contact'>
                                Go to contact
                                </Link>
                            </button>
                </div>
                <div>
                    <Outlet/>
                </div>

                <footer>
                    <h1>footer</h1>
                </footer>
        </>
    )
}
export default Layout