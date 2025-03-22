import React from "react"
import { Link } from "react-router-dom"
function About(){
    return(
        <>
        <h1>About</h1>
        <button>
            <Link to='contact'>
            Go to gallery
            </Link>
        </button>
        
        </>
    )
}

export default About