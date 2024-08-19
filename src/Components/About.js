import React from "react";

const About = () => {
  return (
    <div>
      <div className="   flex justify-center items-center search m-4 p-4">
        <input
          type="text"
          data-testid="searchInput"
          className="border border-solid border-color-graylight w-[40%] h-[40px] pl-5 font-GilroySemiBold "
          value={
            ""
          } /* when i give value as searchtext u cant able to type in the placeholder it will bind to the state so thatu need to update the state with help of onchange((e)=>{setSearchText(e.target.vale)})*/
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search for resturants and food"
        />
        <button
          className="px-4 py-1 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            //filter the res card update the ui
            //search Text
            const filterCards = res.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterCards(filterCards);
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default About;

// import User from "./User"
// import UserClass from "./UserClass"
// import { Component } from "react"    //import React
// import UserContext from "../utils/UserContext";

// class About extends Component {    //React.component
//     constructor(props) {
//         super(props);
//         console.log("parent constrcture")  //1st called
//     }

//     componentDidMount(){
//         console.log("parent componetdidmount")  //3rd called
//     }
//     render() {
//         console.log("parent render")   //2nd called
//         return (
//             <div>
//                 <h1>this is About PAge</h1>
//                 <p>developed by jubair</p>
//                 <h2>
//                     LoggedIn User
//                     <UserContext.Consumer>
//                         {({LoggedInUser})=><h1>{LoggedInUser}</h1>}
//                     </UserContext.Consumer>
//                 </h2>
//                 <User name={"juabir kasim"} location={"salem"} />
//                 {/* <UserClass name={"jubair kasim 1st child"} />
//                 <UserClass name={"jubair kasim 2nd child"} /> */}
//             </div>
//         );

//     };
// }

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
//export default About

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
