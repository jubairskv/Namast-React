import { CDN_URL } from "../utils/constant";

const ItemList=({items})=>{
    console.log(items)
    return(
        <div>
          {
            items.map((items)=>(
                <div key={items.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">
                    <img src={CDN_URL + items.card.info.imageid} className="w-14"/>
                    <div className="py-2">
                        <span>{items.card.info.name}</span>
                        <span> - ₹{items.card.info.price ? items.card.info.price/100:items.card.info.defaultPrice/100}</span>
                    </div>
                    <p>{items.card.info.description}</p>
                </div>
            ))}
        </div>
    );

};

export default ItemList;