
import {url} from "../utils/data"

const ResturantCard=(props)=>{

    const {name, cloudinaryImageId,costForTwo,cuisines,deliveryTime,avgRating}=props.data.info
   
    // console.log(props.x.info)
     return(
     <div className=" m-4 p-4 w-[250px] rounded-xl bg-gray-100 hover:bg-blue-200'">
      <img  className="  rounded-2xl "  src={url+cloudinaryImageId}/>
      <h3 className=" font-bold">{name}</h3>
      <p>{cuisines[0]}</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime}mints</p>
      <p>{avgRating}*ratings</p>
     </div>
     )
   }


   export const withVegLabel= (ResturantCard)=>{
    return (props)=>{
      
        return(
            <div>
            <label className="absolute bg-green-400 text-black m-2 p-2 rounded-lg">Veg</label>

            <ResturantCard {...props}/>

            </div>
            
        )
    }
}

export default ResturantCard