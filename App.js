import React from "react";
import ReactDOM from "react-dom/client"
// const heading1=React.createElement("h1",{id:"title"},"Heading1")
// const heading2=React.createElement("h2",{id:"title"},"Heading2")
// const container=React.createElement("div",{id:"container"},[heading1,heading2])
// const root=ReactDOM.createRoot(document.getElementById("root"))
// passing the react element inside the root
// root.render(container);
// console.log(container)
/**
 * <div id="parent"> * <div id=child>
 * <h1></h1>
 * 
 * <h2></h2>
 * </div>
 * </div>
 * reactElement(object)=>HTML(browser understand)
 *
 */
// const parent = React.createElement(
//   react element
//   "div",
//   { id: "parent" },
// [ React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "hi there this jubair react"), //if u want to pass nested component u have pass like as array
//     React.createElement("h2", {}, "hi there"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "hi there"), //if u want to pass nested component u have pass like as array
//     React.createElement("h2", {}, "hi there"),
//   ])]
// );

//Reactelement => object => HTML element

//jsx[transpile before it reaches the JS engine] - parcel - babel
//const jsx = <h1 className="heading">React element using JSX</h1> //this code transpile with babel as js code so browser xan understand [not only this code all piece of code]

//react element
/* const multiline_jsx = (
    <h1>
        this is multiline JSX
    </h1>
)
//react component
const ReactComponent = () => {
    return <h1>hi fuction component</h1>  //common syntax
}
//react element
const heading = React.createElement("h1", { id: "heading" }, "hi everyone");
//react component
//class base component -OLD
//functional component -NEW
const functionComponent = () => {
    return <h1>hi fuction component</h1>  //common syntax
}

const functionsComponent = () => {
    (
        <h1>
            hi fuction component
        </h1>
    )
}*/
//const elem=<span>react  element</span>
//react Element
// const title =(
//    <h1>
//      hi React component
//       {elem}
//      </h1>
// )
//const data=1000
//const datas=api.getData();

//component composition
// const Title = ()=>{
//    return   <h1>
//     hi component composition
//     </h1>
// }

// const FunctionssComponent = () => (
//     <div id="heading">
//         <Title/>
//         <Title></Title>
//         {title}
//         {Title()}  
//         {data}
//         <h1>{data}</h1>
//         <h1>{console.log("jubair")}</h1>
//         <h1 className="heading">
//             hi fuction component
//         </h1>
        
//     </div>
// )

//const funComponent = () => <h1>hi fuction component</h1>  //both same component

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(multiline_jsx);  //rendering react elelemnt
//root.render(<FunctionssComponent/>);   //rendering React component         //everything will render inside the root id
// console.log(parent);

const resObj={
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "352131",
        "name": "House of Hyderabadi Biryani",
        "cloudinaryImageId": "d6c7910482661bd8a5940c950dbe69c0",
        "locality": "OMR Navalur",
        "areaName": "OMR Navalur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Andhra",
          "Biryani",
          "Chinese"
        ],
        "avgRating": 4,
        "parentId": "103687",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "promoted": true,
        "adTrackingId": "cid=12579896~p=0~adgrpid=12579896#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=352131~eid=783b1658-efa7-4176-9af3-9badde574e02~srvts=1713804867312~collid=83649",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 7.7,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "7.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-23 00:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=352131&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  };


const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-conatiner">
              <img className="logo" src="https://penji.co/wp-content/uploads/2022/08/10.-mr.-d-food-logo.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard=(props)=>{  {/*props to destrcturing*/  {/*resName,cuisine*/}}
     const {resData} = props
     console.log(resData.card.info.name)
    //console.log(resName,cuisine)
     //const {resName,cuisine}=props  destrctuing props logic behind
    return(
        <div className="res-card" style={{background:"#f0f0f0"}}>
            <img  className ="res-image" alt="Briyani Image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d6c7910482661bd8a5940c950dbe69c0" />
            <h3>{resData.card.info.name}</h3>
            <h4>{resData.card.info.cuisines.join(",")}</h4>  {/*using props destrcturing*/} 
            <h4>{resData.card.info.avgRating}Star</h4>
            <h4>{resData.card.info.costForTwo}</h4>
                 
        </div>
    )
}

// const RestaurantCard=(props)=>{
    //const {resName,cuisine}=props  destrctuing props logic behind
//     console.log(props)
//     return(
//         <div className="res-card" style={{background:"#f0f0f0"}}>
//             <img  className ="res-image" alt="Briyani Image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d6c7910482661bd8a5940c950dbe69c0" />
//             <h3>{props.resName}</h3>
//             <h4>{props.cuisine}</h4>   {/*using props */}
//             <h4>4.3 Star</h4>
//             <h4>35 Mins</h4>
                 
//         </div>
    //      <div className="res-card" style={{background:"#f0f0f0"}}>
    //      <img  className ="res-image" alt="Briyani Image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d6c7910482661bd8a5940c950dbe69c0" />
    //      <h3>Meghana Foods</h3>
    //      <h4>Briyani, North Indian, Asian</h4>
    //      <h4>4.3 Star</h4>
    //      <h4>35 Mins</h4>
    //  </div>                //static data
        
//     )
// }
const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <RestaurantCard resData={resObj} />
            <RestaurantCard resData={resObj}/>
            {console.log(resObj)}
                {/*<RestaurantCard resName="KFC" cuisine="Briyani, North Indian, Asian"/>*/}
                {/* <RestaurantCard resName="Mc-Donals" cuisine="Briyani, North Indian, Asian"/> */}
               
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
}

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)

