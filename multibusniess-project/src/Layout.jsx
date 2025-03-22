import { Link,Outlet } from "react-router-dom"
import { FaUser, FaCog } from 'react-icons/fa'; 

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


const Layout=()=>{

    return(
        <>
            <div className="nav-nav-bar">
                <nav>
                    <img src="logo2.png" alt="" />
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='services'>Services</Link></li>
                    <li><Link to='contact'>Conatct</Link></li>

                    <li>
                        <input type="text" placeholder="Search..." className="search-bar" />
                    </li>

                    <li><FaUser className="icon" /></li>
                    <li><FaCog className="icon" /></li>
                </ul>
                </nav>
            </div>

            

            {/* HERO   */}
     
            <Carousel>
      <Carousel.Item>
        <img src="ecom.jpeg" alt="" style={{ width: "100%" }}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="ecom.jpeg" alt="" style={{ width: "100%" }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="ecom.jpeg" alt="" style={{ width: "100%" }} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>     

            {/* END */}
       
       <Outlet />
            
   
            
            <footer>
                <h1>Footer</h1>
                </footer>  
        </>
    )
}

 export default Layout