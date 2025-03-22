    import { Link } from "react-router-dom"
    import '../src/App.css'
function Navbar(){

    return(
        <>
            <nav className="Nav-nav-bar">
                <h1>Logo</h1>
                <ul>
                    <li> <Link to='/' className="url">Home</Link></li>
                    <li> <Link to='about' className="url">About</Link> </li>
                    <li> <Link to='contact' className="url">Contact</Link> </li>
                </ul>
            </nav>
        
        </>
    )
}
export default Navbar