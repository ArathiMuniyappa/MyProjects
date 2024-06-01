import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"

const Header=()=>{
 
   const isOnline = useOnline()


    return(
    <div className=" flex justify-between bg-amber-300 lg:bg-orange-200 shadow-lg " >
     <img  className=" w-16 rounded-xl" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsEDquJTsZUMqxcxU4Mwbe4gEcmQzaUw1UK_ktnlKI0MxcKnMxU9vCW4vBw&s"/>
     <ul className=" flex items-center p-4 m-4 ">
{/* 
      {/* //Due to anchor tag full page is downloading for every component. so use link tag from router.
      {/* <li> <a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li> <a href="/contact">Contact</a></li>
      <li> <a href="/cart">Cart</a></li>
      <li>LogIn</li> */} 

      <li> {isOnline ? "🟢": "🔴"} </li>
      <li className=" px-4"> <Link to="/">Home</Link></li>
      <li className=" px-4" > <Link to="/about">About</Link></li>
      <li className=" px-4"> <Link to="/contact">Contact</Link></li>
      <li className=" px-4"> <Link to="/cart">Cart</Link></li>
      <li className=" px-4">LogIn</li> 
      </ul>  
    </div>
   )
  }

  export default Header