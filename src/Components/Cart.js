import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const cart = ()=>{
    const cartItems =useSelector((store)=>store.cart.items)

    return(
        <div className="text-center m-4 p-4">
           <h1 className="text-2xl font-bold"> cart</h1>
           <div className="w-6/12 m-auto p-4 ">
            <button>Clear Cart</button>
            <ItemList items={cartItems}/>   {/*reusong the ItemList component */}
           </div>
        </div>
    )

}

export default cart;