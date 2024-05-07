import { useEffect,useState } from "react"
import { MENU_API } from "../utils/constant";

//custom Hook
const useRestarauntMenu = (resId)=>{
    const [resInfo , setResInfo] = useState(null)

   useEffect(()=>{
    fetchMenu()
   }) 

   const fetchMenu = async()=>{
    const data = await fetch (`${MENU_API}` + `${resId?.resId}`)
    const json = await data.json()
    setResInfo(json.data)
   }

    return resInfo
}
export default useRestarauntMenu