//EP-05--------------------------------------------
//creating the foodordering app
//steps to be followed
//planning the ui or wireframe
//then discuss abiut wat component we require like:
/*
HEADER
    -logo
    -navitmes
BODY 
    -Search component
    -card conntainer
        --lot of resto cards
            ---image and text
FOOTER
    -copyright
    -links
    -Address
    -contact
*/

// now everything could be done using normal html and css and js so why to use react becuse it is developer friendly(it helps the developer to write less code to do many things)

import React from "react";
import ReactDOM from "react-dom";
import  HeaderComponent  from "./components/Header";
// import { HeaderComponent } from "./components/Header.js here both are same react will treat both header.js and header same while importing";
import Body from "./components/Body";

//2nd we need to create header component
// const HeaderComponent = () => {
//   return (
//     <div className="header">
//       <div>
//         <img
//           src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
//           className="logo"
//         />
//       </div>
//       <div className="nav-items">
//         <ul className="items">
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Conatct US</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };




// const RestaurantCard = (props) => {
//     const { resData } = props;
//     return (
//       <div className="res-card" style={styleCard}>
//         <div>
//           <img
//             alt="resto pic"
//             src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.data.image}
//             className="res-logo"
//           />
//           <h3>{resData?.data.resName}</h3>
//           <h4>{resData?.data.cuisine}</h4>
//           <h4>4.4 stars</h4>
//           <h4>38 mins</h4>
//         </div>
//       </div>
//     );
//   };

// const resList= [
//     {
//         "data" : {
//             "id":0,
//             "resName": "MCD",
//             "cuisine":"Burger",
//             "image": "e33e1d3ba7d6b2bb0d45e1001b731fcf"
//         }
//     },
//     {
//         "data" : {
//             "id":1,
//             "resName": "Haldirams",
//             "cuisine":"",
//             "image": "2f849d999918d411532dd1e8c24f29e0"
//         }
//     },
//     {
//         "data" : {
//             "id":2,
//             "resName": "Dominos",
//             "cuisine":"Burger",
//             "image": "aadw5xxrjtv6xxhtscai"
//         }
//     },
//     {
//         "data" : {
//             "id":3,
//             "resName": "CCD",
//             "cuisine":"Burger",
//             "image": "d96267738c19ec62acb5390e52faba41"
//         }
//     }
// ]


//then we need to create body component
// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="resto-container">
//         {
//             resList.map(restaurant => {
//                 return <RestaurantCard key={restaurant?.data.id} resData={restaurant}/>
//             })
//         }
//       </div>
//     </div>
//   );
// };

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


//EP-05 REACT HOOKS

//component file name shd we in capital first letter
//constants file should be in small letters.

/*there are 2 types of exports
1st is the default export  in 1 file we can have only 1 default export  if we try we will error .Default export means by default a file can export only 1 thing ,while importing we should not put name of the thing in curly braces to import .
2nd is the named export if we want to export multiple things in a file we use named export example is in constants.js file,
there will be slight difference while importing i.e we need to write curly braces and name of the thing inside it and import it
 */

/*Home work : can we do the named and default export for the same component */


/*(body.js)now lets create a button where onclick we get toprated restaurants  and handle onclick events
here we created new datalist listOfRestaurants and created th efilter function but on click on of top rated button our data is getting filtered but still ui is not getting updated or refreshed , so this is the problem that React is solving i.e react is very fast in DOM manipulation ,it keeps the ui and data layer consistent  .
//now react hook :is a noraml javascript function given by react to us,it is prebuilt the only thing is the function comes with super powers,it has some logic return behinfd the scenes,it is utility function given to us.*/


/*after useState 
react uses somethinf known as reconciliation algorithm whixh is also known as REACT FIBER 
to explain the above with example that there is 1 res-container having 7 res cards in it then it is gets updated to have 3 res cards from the filtered cards . so now what is virtual DOM : it is the representation of the actual DOM , so now wat is actual DOM (it is <div>inside 1 <div> inside 1<img> inside 4 subheading tags<h4>)here virtual DOM is the object representationn of the elements so in DIFF algorithm it will find the differences between the old virtual DOM and new virtaul DOM and updates/rerenders the ui/88888888components here the old DOm is the res-conatinner with 7rescards and new is the 3 res cards in the conatiner ,it is easy to compare btw the objects*/