import React, { useState } from "react";
import ItemList from "./ItemList";

 const ResturantCatogery=(props)=> {
  console.log(props)

    const {itemCards, title}= props.data.card.card


     const handClick =()=>{

    console.log("clicked")
 
   }


        return(
            <div className=" flex justify-between  w-6/12  m-auto  bg-gray-50 my-2 p-4 shadow-xl">

                <div className="flex justify-between " onClick={handClick}>

                    <span className='font-bold text-lg'>{title} ({itemCards.length})</span>
                   <span>⬇️</span>
                </div>

                   <ItemList items={itemCards}/>
        
        </div>

        )
    }

    export default ResturantCatogery