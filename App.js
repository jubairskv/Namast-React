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

const resList = [
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "200767",
          "name": "Sharief Bhai",
          "cloudinaryImageId": "5015204e6868e99a2e4d84880af68c5a",
          "locality": "2nd Stage",
          "areaName": "Indiranagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Arabian",
            "South Indian",
            "Rolls & Wraps",
            "Street Food",
            "Fast Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "5734",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=12881219~p=0~adgrpid=12881219#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=200767~eid=844c77c2-1343-4b41-a3a9-21b949fab62f~srvts=1713861580083~collid=83649",
          "sla": {
            "deliveryTime": 48,
            "lastMileTravel": 6.1,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "6.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Biryani.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-Biryani.png",
                      "description": "Delivery!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {

              },
              "textBased": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹799",
            "discountTag": "FLAT DEAL"
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
              "rating": "4.1",
              "ratingCount": "1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=200767&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "439141",
          "name": "Biryani Blues",
          "cloudinaryImageId": "97377e54937c079fe269d744aa66274a",
          "locality": "Church Street",
          "areaName": "Church Street",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "Kebabs",
            "Lucknowi",
            "Hyderabadi"
          ],
          "avgRating": 4.4,
          "parentId": "13813",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "promoted": true,
          "adTrackingId": "cid=12826996~p=1~adgrpid=12826996#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=439141~eid=2e37f7ac-7085-40cd-975d-17e97861b8ac~srvts=1713861580083~collid=83649",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-24 02:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textExtendedBadges": {

              },
              "textBased": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹499",
            "discountTag": "FLAT DEAL"
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
              "rating": "4.0",
              "ratingCount": "50+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=439141&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "426393",
          "name": "Svss Biryani",
          "cloudinaryImageId": "eea5349022df0d34cce76cb0c6884e72",
          "locality": "CMH Road",
          "areaName": "Indiranagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Hyderabadi",
            "Andhra",
            "Continental"
          ],
          "avgRating": 4.2,
          "parentId": "454102",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "promoted": true,
          "adTrackingId": "cid=12865798~p=2~adgrpid=12865798#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=426393~eid=32f06c12-29ac-41f1-b0e6-7fd59e93a4cb~srvts=1713861580083~collid=83649",
          "sla": {
            "deliveryTime": 44,
            "lastMileTravel": 6.1,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "6.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 16:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
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
                "badgeObject": [
                  {
                    "attributes": {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "description": "",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
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
          "link": "swiggy://menu?restaurant_id=426393&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "32738",
          "name": "Donne Biryani House",
          "cloudinaryImageId": "cgtfmodhd9gme13pblre",
          "locality": "Sampige road",
          "areaName": "Malleshwaram",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Biryani",
            "South Indian"
          ],
          "avgRating": 4.2,
          "parentId": "338",
          "avgRatingString": "4.2",
          "totalRatingsString": "5K+",
          "promoted": true,
          "adTrackingId": "cid=12865232~p=3~adgrpid=12865232#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=32738~eid=a41e1d63-5aae-4d9f-bc14-b4d1bb3544d1~srvts=1713861580083~collid=83649",
          "sla": {
            "deliveryTime": 46,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textExtendedBadges": {

              },
              "textBased": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
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
          "link": "swiggy://menu?restaurant_id=32738&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "123985",
          "name": "Hyderabadi Biryani Hotel",
          "cloudinaryImageId": "6087ee14b9ede7e3d0b127fb75d919fc",
          "locality": "Malleshwaram",
          "areaName": "Malleshwaram",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Hyderabadi",
            "Biryani",
            "Chinese",
            "North Indian"
          ],
          "avgRating": 4.3,
          "parentId": "262113",
          "avgRatingString": "4.3",
          "totalRatingsString": "5K+",
          "promoted": true,
          "adTrackingId": "cid=12867179~p=4~adgrpid=12867179#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=123985~eid=b53538ab-46b8-40ea-81ca-abb606e27e0e~srvts=1713861580083~collid=83649",
          "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {

              },
              "textBased": {

              },
              "imageBased": {

              }
            }
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
              "rating": "4.2",
              "ratingCount": "5K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=123985&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "41100",
          "name": "Nagarjuna - Since 1984",
          "cloudinaryImageId": "dv37g3hyph2fyeqw6kfl",
          "locality": "Residency Road",
          "areaName": "Ashok Nagar",
          "costForTwo": "₹600 for two",
          "cuisines": [
            "Andhra",
            "South Indian",
            "Biryani",
            "Beverages",
            "Desserts"
          ],
          "avgRating": 4.6,
          "parentId": "509973",
          "avgRatingString": "4.6",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-23 15:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Andhra.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {

              },
              "textBased": {

              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-Andhra.png",
                      "description": "Delivery!"
                    }
                  }
                ]
              }
            }
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
              "rating": "4.2",
              "ratingCount": "10K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=41100&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "3434",
          "name": "Nandhini Deluxe",
          "cloudinaryImageId": "b7df40343b2a9df3f275024aff13d5df",
          "locality": "St. Marks Road",
          "areaName": "St Marks Road",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Andhra",
            "Biryani",
            "Chinese",
            "North Indian"
          ],
          "avgRating": 4.3,
          "parentId": "2451",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 0.9,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "0.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-24 00:00:00",
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
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
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
              "rating": "3.8",
              "ratingCount": "1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=3434&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  }
]

const Header = () => {
  return (
    <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src="https://penji.co/wp-content/uploads/2022/08/10.-mr.-d-food-logo.jpg" />
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

const RestaurantCard = (props) => {
  {/*props to destrcturing*/  {/*resName,cuisine*/ } }
  const { resData } = props
  const {name,cuisines,avgRating,costForTwo}=resData?.card.card.info
  const {deliveryTime}=resData?.card.card.info.sla
  console.log(resData)
  //console.log(resName,cuisine)
  //const {resName,cuisine}=props  destrctuing props logic behind
  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img className="res-image" alt="Briyani Image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.card.card.info.cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>  {/*using props destrcturing*/}
      <h4>{avgRating}Star</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
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
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map(restaurant =>
            <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
          )
        }
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        {console.log(resList)} */}
        {/*<RestaurantCard resName="KFC" cuisine="Briyani, North Indian, Asian"/>*/}
        {/* <RestaurantCard resName="Mc-Donals" cuisine="Briyani, North Indian, Asian"/> */}

      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)

