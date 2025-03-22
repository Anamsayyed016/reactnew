import React from "react"
import { Link } from "react-router-dom"
function Contact(){
    return(
        <>
        <h1>Contact</h1>
        <button>
            <Link to='/gallery'>
            Go to gallery
            </Link>
        </button>
        </>
    )
}

export default Contact