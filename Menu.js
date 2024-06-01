import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import Shimmer from "./Shimmer"
import ResturantCatogery from "./ResturantCatogery"

const Menu = ()=>{
        
     const {id} = useParams() 
     
     const menu = useRestaurantMenu(id)

    
     if (menu===null) return <Shimmer/>

     const {name, cuisines, costForTwoMessage} = menu.data.cards[2].card?.card?.info

     const categories = menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((each)=>each.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     console.log("categories:", categories)

      
    return(menu===null)? <Shimmer/> : (

     <div className=" text-center">

           <h1 className='font-bold my-5 text-2xl'>{name}</h1>
           <h2 className='font-bold'>{cuisines.join(",")}</h2>
           <p className='font-bold'>{costForTwoMessage}</p>
           {categories.map((catogery)=> <ResturantCatogery  key={catogery.card.card.title} data = {catogery.card.card}  
      
           /> )}
          

     </div>
    
    )
}

export default Menu