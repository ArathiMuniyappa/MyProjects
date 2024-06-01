import { useState } from "react"
import { useEffect } from "react"



const useRestaurantMenu=(id)=>{

    const [menu, setMenu] = useState(null)

    const menu_url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="

    useEffect (()=>{
        const fetchMenu = async ()=>{
      const data = await fetch (menu_url+id)
      const res = await data.json()
      setMenu(res)
        }
       fetchMenu()
  
       },[])

  return menu
}


export default useRestaurantMenu