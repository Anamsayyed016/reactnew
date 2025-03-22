import { CiHome } from "react-icons/ci";
import './App.css'
import About from './About'
function Home  ()
{
    
    return(
        <>
<section className="img1">
    <img src="./logo.avif" alt="" />

            <ul className="Navbar">
                <li><CiHome />Home</li>
                <li>About</li>
                <li>Contatc</li>
            </ul>
            <h1></h1>
            <p></p>
            <button>click</button>
</section>
        
        </>
    )
}
export default Home
