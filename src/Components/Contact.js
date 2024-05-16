import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact=()=>{

    const {LoggedInUser} = useContext(UserContext)
    return (
        <div>
            <h1>this is contact PAge</h1>
            <h1>user : {LoggedInUser}</h1>
        </div>
    );
};

export default Contact;