import { useEffect, useState } from "react";

const User = ({name,location}) =>{   // (props)
    const [count]=useState(0);
    const [count2]=useState(0);

    useEffect(()=>{
       data();
    })

    const data = async() => {
        const api=await fetch("https://api.github.com/users/jubairk")
        const json_data= await api.json()
        console.log(json_data)
    }

    return (
        <div className="user">
            <h1>count:{count}</h1>
            <h1>count:{count2}</h1>
            <h2>Name:{name}</h2>               {/* props.name  -replaced by destrcturing*/ }   
             <h3>Location:{location}</h3>      {/*props.location */}
            <h4>Contact:jubair@gmail.com</h4>
        </div>
    )
}

export default User;