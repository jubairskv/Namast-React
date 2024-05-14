const ItemList=({items})=>{
    console.log(items)
    return(
        <div>
          {
            items.map((items)=>(
                <div key={items.card.info.id}>
                    <div>
                        <span>{items.card.info.name}</span>
                        <span>{items.card.info.price}</span>
                    </div>
                    <p>{items.card.info.description}</p>
                </div>
            ))}
        </div>
    );

};

export default ItemList;