import React from "react";
import {url} from "../utils/data";


const ItemList = (props)=>{
  const {items}=props
 console.log(items)

  return (

<div>
      {items.map((item) => (
          <div
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between cursor-pointer"
        >
        <div className="w-9/12">
            <div className="py-2">
                <span>{item.card.info.name} </span>
                <span className="flex">
                <p className="my-1">{item.card.info.price ? item.card.info.price / 100: item.card.info.defaultPrice/100}</p> 
               </span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
       </div>
          <div  className="w-3/12">
             <div > <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute ">Add+</button></div>
         {
          item.card.info.imageId && <img src={url + item.card.info.imageId} className="rounded-2xl" />
         }
          
            </div>
          
          
        </div>
      ))}
    </div>


    )
}
    export default ItemList
