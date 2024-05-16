import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"    //import React
import UserContext from "../utils/UserContext";

class About extends Component {    //React.component
    constructor(props) {
        super(props);
        console.log("parent constrcture")  //1st called
    }

    componentDidMount(){
        console.log("parent componetdidmount")  //3rd called
    }
    render() {
        console.log("parent render")   //2nd called
        return (
            <div>
                <h1>this is About PAge</h1>
                <p>developed by jubair</p>
                <h2>
                    LoggedIn User 
                    <UserContext.Consumer>
                        {({LoggedInUser})=><h1>{LoggedInUser}</h1>}
                    </UserContext.Consumer>
                </h2>
                <User name={"juabir kasim"} location={"salem"} />
                {/* <UserClass name={"jubair kasim 1st child"} />
                <UserClass name={"jubair kasim 2nd child"} /> */}
            </div>
        );
    
    };
}


// const About = ()=>{
//     return (
//         <div>
//             <h1>this is About PAge</h1>
//             <p>developed by jubair</p>
//             <User name={"juabir kasim"}  location={"salem"}/>

//             <UserClass name={"jubair kasim class"} />
//         </div>
//     );
// };
export default About

/* react render cycle     //this react life cycel
-parent constrcture
-parent render
  -1st child constrcture
  -1st child render             //it will strcture only upto this phase
  -2st child constrcture
  -2st child render

  [Dom naipulaton stated]
  -1st child CompoundDIdmount   //it give data
  -2st child CompoundDIdmount
-parent CompoundDidMount

*/

