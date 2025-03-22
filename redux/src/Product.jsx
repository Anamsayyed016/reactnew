import React from "react"
import myimg from './assets/react.svg'
import { useDispatch, useSelector } from "react-redux"
import { additeam } from "./Cardslice"

const Product = ()=>{

    let storedata = useSelector((store)=>store.cart.cartitems)
    let datadispatch = useDispatch()
        let cards=[
            {
                id:1,name:"Laptop",price:12000,pimg:myimg
            },
            {
                id:1,name:"Mobile",price:20000,pimg:myimg
            },
        ]

        function handlecart(e){
            datadispatch(additeam(e))
        }
    return(
        <>
            <h1> cart item - {storedata.length} </h1>
            <div>
                {
                    cards.map((e)=>{return <div style={{border:"2px solid black"}}>
                    <img src={e.pimg} alt="" />
                    <h2>product name {e.name}</h2> 
                    <h3>price{e.price}</h3>
                    <button onClick={()=>handlecart(e)}>Add to card</button>
                    </div>})
                }
            </div>
        </>
    )
}
export default Product