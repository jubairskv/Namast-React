import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
    {/*props to destrcturing*/  {/*resName,cuisine*/ } }
    const { resData } = props
    console.log(resData)
    const {name,cuisines,avgRating,costForTwo}=resData?.info
    const {deliveryTime}=resData?.info.sla
    console.log(resData)
    //console.log(resName,cuisine)
    //const {resName,cuisine}=props  destrctuing props logic behind
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg" style={{ background: "#f0f0f0" }}>
        <img className="rounded-lg h-36 w-56" alt="Briyani Image" src={CDN_URL + resData.info.cloudinaryImageId} />
        <h3 className="font-bold py-2 text-xl">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>  {/*using props destrcturing*/}
        <h4>{avgRating}Star</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    )
  }
  
  // const RestaurantCard=(props)=>{
  //const {resName,cuisine}=props  destrctuing props logic behind
  //     console.log(props)
  //     return(
  //         <div className="res-card" style={{background:"#f0f0f0"}}>
  //             <img  className ="res-image" alt="Briyani Image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d6c7910482661bd8a5940c950dbe69c0" />
  //             <h3>{props.resName}</h3>
  //             <h4>{props.cuisine}</h4>   {/*using props */}
  //             <h4>4.3 Star</h4>
  //             <h4>35 Mins</h4>
  
  //         </div>
  //      <div className="res-card" style={{background:"#f0f0f0"}}>
  //      <img  className ="res-image" alt="Briyani Image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d6c7910482661bd8a5940c950dbe69c0" />
  //      <h3>Meghana Foods</h3>
  //      <h4>Briyani, North Indian, Asian</h4>
  //      <h4>4.3 Star</h4>
  //      <h4>35 Mins</h4>
  //  </div>                //static data
  
  //     )
  // }
  export default RestaurantCard;   //default export for single export