import { Link } from "react-router-dom"
import React from "react"
function Gallery(){
    return(
        <>
        <h1>gallery</h1>
        <button>
            <Link to= 'contact'> go to about</Link>
        </button>
        </>
    )
}

export default Gallery