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

why react is fast
react makes Dom operation super fast and efficient DOM manipulation when ever i chanage the state varaible and it update so fast rerender the component so fast and it also as diff algorithm

what is react hooks
what is virtual Dom 
virtual dom is representation of actual dom
wht is Diff algorithm
diff algorithm is find out difference between two virtual dom the update virtual dom and previous virtual dom and it calclualte the difference it update it actual DOM on every render cycle

what is reconciliation algorithm(react fiber)
react uses reconciliation algorithm and it also konw as react fiber whenevr you Dom and react create virtual dom

what is optional chaining
what is CORS in react?
what is shimmer UI -fake page untill we get data from API like Skeleton
what is conditional rendering?

why we using state instead of variable bcz when compoent render state take new value but variable wont take new value this why variable not using in react 

when assign useState as const[res,setRes]=useState("") how const is update in javascript we cant able to update const var but in state how its updating state -when ever you update the state, react consider as like new state -new value each rendering it consider as like new state and react take new value


when ever you click the login btn virtual react two dom one is old dom and updated dom then it rendering its updated dom in btn and rerender whole header component and state consider ass like new state and it update this why react is fast this concept also called reconciliationa and diff algorithm

# body .js in search text
 when i give value as searchtext u cant able to type in the placeholder it will bind to the state so thatu need to update the state with help of onchange((e)=>{setSearchText(e.target.vale)})

 # useEffect why are passing dependencies - but dependencies is not mandatory for everytime but based on how ur using useeffect

useEffect(
  ()=>{
    fetchData()  //if no dependencies array => useEffect is callled on every component render
  })

 useEffect(
  ()=>{
    fetchData()
  },[] /if no dependencies array is empty => useEffect is called on initial render(just once it called when component render)
 )

 useEffect(
  ()=>{
    fetchData()
  },[localState]   //if u pass state as dependencies array whenever the state changes made it will rerender
  (or) if dependencies array is localstat it called every state is updated
 )

 what is react router
 what is children route

# hanger tag
<ul>
<li>
 <a href="/">Home</a> if u this tag it will referesh the page
</li>
</ul>

# Link   [recommended way]
<ul>
<li>
 <Link to="/About">About us</Link> if u use link tag won't referesh the page
</li>
</ul> 

 # what are the two types of routing in web application?
-client side routing
-server side routing

waht is react router?
what is mean by dynamic routing?
what is custom hook
what is lazy loading
what is higher order component
waht is conrolled and uncontrolled componet
know how to manage data in react application
what is Accoridan UI component?
you can't able to pass data from child component to pareent component

with help of uncontrolled componet we can pass data from child component to parent componet passing data as props state its not own state its tricky state

what is lifting state up? --important topic in accoridan ui component
what is props drilling?
to avoid props drilling we use react context
what is react context
what is difference b/w react context and redux

when we need to manage state or data for small application go for context 
when your application is big go for redux
 
# Redux Toolkit
 -install @reduxjs/toolkit and react-redux
 -build our store
 -connect our store to our app
 -slice(cartSlice)
 -dispatch(action)
 -reducer function
 -selector

what is diff b/w three things
 onClick={()=>handleAddItem(items)}
 onClick={handleAddItem}
 onClick={handleAddItem(items)}


what is middleware in old version of redux
what is thunk in old version of redux
what is immer library in redux

# types of testing(developer)
  - unit testing                 //developer main focus is 1st 2tu testing
  - integration testing
  - End to End testing (e2e)

# testing configuation
  -react testing libray  npm i -D @testing-library/react
  -jest framework npm i -D jest
  -using babel need to install additional dependencies
  -npm install --save-dev babel-jest @babel/core @babel/preset-env
  -config babel file
  -babel.config.js
  -.parcelrc file   --config
  -npm run test
  -jest config npx jest --init 
  -install jsdom library  -npm install --save-dev  -jest-environment-jsdom
  -npm i -D @babel/present-react
  -include this in config into the babel file
  -install @testing-library/jest-dom