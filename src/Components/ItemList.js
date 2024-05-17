import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items,dummy}) => {
    console.log(dummy)     //props drilling
    //const { items } = props
    //const {id,name,price,description} = items?.card?.info
    // console.log(id,name,price,des)
    //console.log(props)

    const dispatch = useDispatch();

    const handleAddItem = ()=>{
        //distpact(action)
        dispatch(addItem(items))
    }
    return (
        <div>
            {
                items.map((items) => (
                    <div key={items.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                       
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{items.card.info.name}</span>
                                <span> - ₹{items.card.info.price ? items.card.info.price / 100 : items.card.info.defaultPrice / 100}</span>
                            </div>
                            <p>{items.card.info.description}</p>
                        </div>
                        <div className=" w-3/12 p-4">
                            
                            <div className="absolute ">
                            <button className="p-2 mx-10 bg-lime-400 shadow-lg m-auto rounded-lg"
                             onClick={()=>handleAddItem(items)}>Add +</button>
                            </div>
                            <img src={CDN_URL + items.card.info.imageId} className="w-full" />
                            
                            </div>
                    </div>
                ))}
        </div>
    );

};

export default ItemList;