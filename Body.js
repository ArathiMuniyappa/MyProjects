
import { useState, useEffect } from "react"
 import ResturantCard, { withVegLabel } from "./ResturantCard"
import Shimmer from "./Shimmer"
import {api} from "../utils/data"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"


const Body=()=>{
    const [resList, setRestList] = useState([])
    const [dummy, setDummy]  = useState([]) 
    const [search, setSearch] = useState(" ")

    const isOnOff = useOnline();
    const RestaurentCardVeg = withVegLabel(ResturantCard);
    

//     const resList=[
//       {
//          info: {    
//               id : "334475",
//               name: "paradise",
//               cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//               cuisines : ["Burgers","Biryani", "American", "Snacks"],
//               costForTwo: 40000,
//               deliveryTime : 36,
//               avgRating : "3.8"
//           }
//       },
//       {
//           info: {    
//               id : "334476",
//               name: "Eat panchavat",
//               cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
//               cuisines : ["Burgers","Biryani", "American", "Snacks"],
//               costForTwo: 40000,
//               deliveryTime : 20,
//               avgRating : "4.3"
//           }
//       },
//       {
//           info: {    
//               id : "334477",
//               name: "Dominos",
//               cloudinaryImageId: "az9ex7bhar9uwg5yhcdm",
//               cuisines : ["Burgers","Biryani", "American", "Snacks"],
//               costForTwo: 40000,
//               deliveryTime : 40,
//               avgRating : "4.4"
//           }
//       },
//       {
//           info: {    
//               id : "334478",
//               name: "kritunga",
//               cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
//               cuisines : ["Burgers","Biryani", "American", "Snacks"],
//               costForTwo: 40000,
//               deliveryTime : 40,
//               avgRating : "3.9"
//           }
//       },
//       {
//           info: {    
//               id : "334479",
//               name: "Suprabhat",
//               cloudinaryImageId: "g1arzw6qd7g9affkmgzk",
//               cuisines : ["Burgers","Biryani", "American", "Snacks"],
//               costForTwo: 40000,
//               deliveryTime : 40,
//               avgRating : "3.5"
//           }
//       },
//   ]
     useEffect(()=>{
     const fetchData = async()=>{
     const data = await fetch(api)
     const result = await data.json()
     console.log(result)
     setRestList(result?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants)
     setDummy(result?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants)
       }
       fetchData()
     },[])
      
     if (isOnOff===false) return <h1>Seems like you do not have internet, please check </h1>

    return (resList.length===0) ? <Shimmer/>:(

     <div>
      <div>
      <button onClick={()=>{

      const data=resList.filter(each=> each.info.avgRating>4.5)
      console.log(data)
      setRestList(data)

      }}>Top Rated Restuarants</button>
     
      </div>

      <div>
       <input type="text" onChange={(e)=>{
       
           setSearch(e.target.value)
           console.log(e.target.value)

       }}></input>
       <button onClick={()=>{
         const filterData= dummy.filter(each=> each.info.name.toUpperCase().includes(search.toUpperCase()))
         console.log(filterData)
         setRestList(filterData) 

       }}>Search</button>

      </div>
     

     <div className=" flex flex-wrap">
     {/* <ResturantCard  image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/p754i3ufkbjnfybbqckj" 
        name="Sri krishna Bavan" rating="4.2" cuisine="South Indian" location="Rajajinagar" />
     <ResturantCard image="-https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/r2noxwvhfv7t1kjwv9ym"
     name="Bawarchi" rating="4.6" cuisine="North Indian" location="Delhi"  />
     <ResturantCard  image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/0adee855c65fa947a256764a87a55658" 
     name="Rameshwaram Cafe" rating="4.7" cuisine="South Indian" location="Malleswaram"  /> */}
     
     
   {/* {resList.map(each=> <ResturantCard x={each}/>)}*/}

   {/* {resList.map(each=> <ResturantCard  key={each.info.id} data={each}/>)} */}
   {/* {resList.map(each=> <Link to={"./restuarant/"+each.info.id}>
    <ResturantCard  key={each.info.id} data={each}/></Link>)} */}


{dummy.map((restaurant) => (
          <Link to={"./restuarant/" + restaurant?.info?.id}>
            {restaurant.info.veg ? (
              <RestaurentCardVeg key={restaurant.info.id} data={restaurant} />
            ) : (
              <ResturantCard key={restaurant?.info?.id} data={restaurant} />
            )}
          </Link>
        ))}
  
     
     </div>
     </div>
    )
  }


  export default Body