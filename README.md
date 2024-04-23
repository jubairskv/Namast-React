# Namast-React
what is react?
what is Emmet?
what is CDN?
CDN is a place where the react library is hosted and fetching the react putting into our code uisng CDN links [content delivery network lins]

A content delivery network (CDN) is a netowrk of interconnected servers that speeds up webpage loading for data heavy applications

why do we use CDN links?
what is react element?
normal javascript object
what is crossorigin?
what is async and differ
what is the shortest program of javascript? 
-ans:empty file
what is jsx?
what is library?
wht is framework?

react is the javascript piece of code

//CDN links will be order of the sequence
1st two CDN links 
then connect app .js with script tag

if u already passing some react element with help of app.js then u directly added into html file anything it replace ur app.js code

what is NPM?

npm install
 -D parcel

there are tow types of dependency:
*dev dependency
*normal dependency

why your app is fast
what is NPX
why do we use NPX
what is npm
why do we use npm
how you create react structure
what is package.json
why do we use package.json
what is package-lock.json
why do we use package-lock.json
what is bundler
what is webpack
create react app behind the scene use webpack
what is babel in react js
what is node_moules
what is .gitignore
what is dist in parcel
what is parcel caching in parcel
when every u you build the code it store in dist file 

# parcel
- dev bulid
- local server
- hot module replacement 
- reliable cachimg
- lazy loading
- tree shaking
- minification
- image optimization
- code splitting
- content hashing
-differential bundling
- powerful plugins
- file watching algoithm
- bundling
- HTTPS
- Diagnostic
- different dev and product bundles

we writing code for human and machine 1st preferenece is human after that machine

if you want to give attribute to your JSX u have to gave in camleCase [className]

what are veriase attribute in JSX

sinle line jsx

const jsx=<h1>hi</h1>

multilinw jsx
const jsx=(<h1>
hi
</h1>)

what is difference between react element and functional component
what is componenet composition
how you render component in react
<reactcomponent/>  you need to wrap into fragment
what is static
what is dynamic
what is client side rendering
what is serverr side rendering
what is dynamic website
what is static website
waht is responsive design

when ever you start to design or developing application i need to start planning how your app went look like design in rough paper

//Website plane:
//header
 -logo
 - nav items
 //body
  -search
  -RestaurantConatainer
  -Restaurantcard
      -Name of restaurent
      -start reating,cusinings
      -img
//Footer
 -Copyright
 -links
 -address
 -Contact

 Different types of CSS
what is  state
what is props
when every new need to pass data for dynamic component 
its normal argument to the function

what is static data in react
why did we use props
when u need to pass data dynamicaly we need to use props
what is props destrcturing
how does data come from backend to us
what is config driven UI -important
all the UI driven by config =data
contolling Ui based on data or location, how the UI looks like using config
data=config-comes from backend
Ui chnaged based on the backend data if my in loation has no carousel data ui will chnaged based on the backend data

what is difference between .js and .jsx extension

why we need key in react
when ever you use map use key in there and also
when data snt new cards data it wont render whole cards only it will rerender the exact snted card for optmizing the page if u wont use key it will rerenderr every cards in 
why do we use key in react
key={restaurant.card.card.id}     //good practice
Keys help React identify which items have changed, are added, or are removed.


key={index}  //dont use index for key  //bad practice
React itself says dont use key as index 

never ever use hardcore data or url or any url links like image ,api anything dont store it in component keep it separate file
like constant.js,config.js,utils.js something like that standard way is utils.js

what are the types of import/export in react
there are two types of import/export in react
-named import/export
-default import/export

default import/export
  import componentname from "./path/"
  export deafult componentname

named import/export
  export const componnet
  import {componet} from "./path"

can i do deafult export with name export both the things in same component?
