import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { IconName } from "react-icons/hi2";
import { FaAddressBook } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { Gi3dGlasses } from "react-icons/gi";
import { HiOutlineCheckCircle } from "react-icons/hi";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <i class="fa-solid fa-house"></i>
      <i class="fa-solid fa-house"></i>
      <i class="fa-solid fa-image"></i>
      <i class="fa-solid fa-magnifying-glass"></i> */}
      {/* <h1> <IconName/> Hello</h1> */}
      <FaAddressBook size={50} color='red'/>
      <HiAcademicCap />
      <Gi3dGlasses />
      <HiOutlineCheckCircle />
    </>
  )
}

export default App
