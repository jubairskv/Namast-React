const ItemList=({items})=>{
    console.log(items)
    return(
        <div>
          {
            items.map((items)=>(
                <div key={items.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">
                    <div className="py-2">
                        <span>{items.card.info.name}</span>
                        <span> - ₹{items.card.info.price/100}</span>
                    </div>
                    <p>{items.card.info.description}</p>
                </div>
            ))}
        </div>
    );

};

export default ItemList;