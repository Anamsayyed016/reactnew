import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './Cardslice'
const Appstore =  configureStore({
        reducer : {
            cart : CartReducer
        }
});

export default Appstore