import RestaurantCard from "./Restaurantcard"
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {
            resList.map(restaurant =>
              <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
            )
          }
          {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          {console.log(resList)} */}
          {/*<RestaurantCard resName="KFC" cuisine="Briyani, North Indian, Asian"/>*/}
          {/* <RestaurantCard resName="Mc-Donals" cuisine="Briyani, North Indian, Asian"/> */}
  
        </div>
      </div>
    )
  }
  export default Body;