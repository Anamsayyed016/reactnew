import React from "react"
import { cdata } from "./src/App"
const Child2=()=>{

    return(

        <>
        <cdata.Consumer>
            {
                (data)=>{
                    return(
                        <>
                            <h1>My name is {data}</h1>
                        </>
                    )
                }
            }
        </cdata.Consumer>
        
        </>
    )
}

export default Child2