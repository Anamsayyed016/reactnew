import React from "react";
import { useParams } from "react-router-dom";

const User = () =>{

    // let {name,age}=useParams()
    let {id}=useParams()

        return(
        <>
        <div>
            {/* <h1>use page and my {name} is and age {age}</h1> */}
            <h1>use page this is user {id}</h1>
        </div>
        </>
        )

}
 export default User

//  component life cycle