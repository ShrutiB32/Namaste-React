//part1 
//useEffect() will be called everytime the page renders i.e everytime the page loads useeffect hook will be called after completion of the rendering of the page.Also if no dependency array then also it will be  render on every component render.
//if dependency array is empty i.e [] then useEffect is called on initial render (and just once)
//if we something in the array then it is called only wen the dependency changes for ex:
//const [btnNameReact,setBtnNameReact] = useState("Login");
// useEffect(() => {
    // console.log("useEffect rendered");
// },[btnNameReact]);

// here this code shd be written in header.js file then if there is update in the btnNameReact then only useeffect is called.

//but wen we add the dependency array to it as 2nd parameter then the behaviour will be changed.


//Part -02
// few more info about useState
// never make the useState hook outside the component always write first inside the component because JS is synchronous single threaded language and it is used to create local state variables inside the functional components and also never create the useState inside the if else or any condition or ant loops or even inside the function.

//Part -03
// how ue routes in react for this we use npm library i.e "react-router-DOM"
// firstly to create the route we need to go to index6.js file first  that is the root level component so over here we need to create routing configuration and to do that we import createBrowserRouter 

import React from "react";
import ReactDOM from "react-dom";
import  HeaderComponent  from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
    return (
      <div className="app">
        <HeaderComponent />
        {/*if i have path as about then about page shd appear if i have path as conatct we shd get contact we use Outlet*/}
        <Outlet />
      </div>
    );
};

//here we write the routting configuration and inside the createBrowserRouter we write the info on wat will happen on specific path so this createBrowserRouter will take the list/array of  paths so write about the about page we need to create "ABOUT Page" in the components folder .Next i just writing this configuration doesn't work we need to pass this configuraiton or provide this to render it ,so to provide it we need to import RouterProvider component from react-router-dom this will provide the routing configuration to our app
// const appRouter = createBrowserRouter([
//     {
//         path:"/",
//         element :<AppLayout />,
//         errorElement:<Error />
//         //this element is to show the error element wen the path given after localhost:1234/ is wrong
//     },
//     {
//         path:"/about",
//         element : <About />
//     },
//     {
//         path:"/contact",
//         element : <Contact />
//     }
// ]); in part 7 it was commented as we have to write children routes to it.
//   
// const root = ReactDOM.createRoot(document.getElementById("root"));part 04
//so earlier we were rendering this app layout directly but now i will provide it through router configuration.Nnetx is that if we write wrong route in the url then we get unexpected application Error! 404 Not Found 
// root.render(<AppLayout />);part 04
// root.render(<RouterProvider router={appRouter} />);part04 commented

//there are many other routers types to use instead of createBrowserRouter like createHashRouter ,createStaticRouter, createStaticHandler and many more. But we use createBrowserRouter

//part 7 we will see how to write the children routes 
//what was happening in the above route configuration is when we click on about new page was rendered and the header was not intact ,to make it intact we use children routes.
  
//so to load these children according to the path change then we need to Outlet to do it .Here Outlet is like the tunnel where the component renders according to the paths.here the compnents from the children will replace the <Outlet /> when the path matches.

const appRouter = createBrowserRouter([
    {
        path:"/",
        element :<AppLayout />,
        children: [
            {
                path:"/",
                element : <Body />
            },
            {
                path:"/about",
                element : <About />
            },
            {
                path:"/contact",
                element : <Contact />
            },
            {
                path: "/restaurants/:id",
                element: <RestaurantMenu />,
            }
        ],
        errorElement:<Error />
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);


//after this we can make the list items clickable and after the click of those items the pages shd be rendered .This can be done using anchor tag  and writing href property to it . but this not a good practice becuase if we use the anchor tag the whole page gets refreshed i.e the header also will get refreshed 
// ex: <li>
{/* <a href:"/about">About */}
// </li> if we do this in header then it is not a good practice

//so instead of this we use something known as link component which is taken from the react-router-dom and will not load the dom
//so we import link component from react-router-dom in the header .
//here link is same as anchor tag , but instead of href we have "to";
//ex: <Link to="/about>ABout</Link>" see header.js

//Link doesnt reload the page it refreshs the page i.e the body is replaced with other components  that is the difference between reload and refresh
//this is the reason why react is single page application.

//there are 2 types of routing in web applications 
//1) client side routing: ex is wat we see on browser or loaclhost:1234 we r not making any network calls while we click on the links i.e about us because of all the components are loaded into our app i.e wen we load our app for the first time it alread has the code for us so wen we go to aboutus page it just loads the component
//2) server side routing: we have index.html,aboutus.html and contact us .html so we click on the anchor tag /about it relaods the entire html sends a network call to aboutUs.html and then renders it to the html.i.e we make the netork call and the page is fetched from the server anad reloads the entire page

//and we are implementing client side routing

//part 5 dynamic routing 
//here we create dynamic routing for restaurant cards i.e wen we clcik the resaturant card we need to route to that particular restaurant and and display the menu of the restaurant.this can be done using the id of the restaurant and passing it dynamically in the url.{
            //     path: "/restaurants/:id",
            //     element: <RestaurantMenu />,
            // }


// <Link> : here link in the elements of html aftere compilation it is rendered as anchor tag only if we inspect and see it in elements .then <Link> is the wrapper over anchor tag.it is given by the react-router-dom it is not underestood by browser or html ,here browser only understands anchor tag

