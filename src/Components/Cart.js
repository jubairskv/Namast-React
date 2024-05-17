import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const cart = ()=>{

    const cartItems =useSelector((store)=>store.cart.items)    //best practice recommended one

    //const store =useSelector((store)=>store)
   // const cartitem = store.cart.items         upper selector and this selector both are same but this selectre is less efficient

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4">
           <h1 className="text-2xl font-bold"> cart</h1>
           <div className="w-6/12 m-auto p-4 ">
            <button className="m-2 p-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1>Cart is empty add your Item</h1>}
            <ItemList items={cartItems}/>   {/*reusong the ItemList component */}
           </div>
        </div>
    )

}

export default cart;