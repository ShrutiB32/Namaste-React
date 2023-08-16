import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";


//ep05 it is not good to keep the hardcoded data into our component file. so we should keep in another file like utils.js,consts.js,config.js

//we  are writing this listOfRestaurants hardcode data in this file itself, just to implement the filter and hooks.
/*now react hook is a noraml javascript function given by react to us,it is prebuilt the only thing is the function comes with super powers,it has some logic return behinfd the scenes,it is utility function given to us .We did npm react in the beginning through whichwe all the utility functions .How to use these hooks? we need to impoort them .There are 2 important hooks in react they are 
-useState()=> it is used to give superpowerful useState variables . we need to import it from React and it is named import .THis is coming from react package in nodemodules.Now useState is used to create a state variable becuse it maintains the state of the component.Now the local state variable scope is inside that component .
-useEffect()*/



const Body = () => {

    //how to createa state variable 
    // const [listOfRestauants, setListOfRestaunts] = useState([
    //     {
    //         "data" : {
    //             "id":0,
    //             "resName": "MCD",
    //             "cuisine":"Burger",
    //             "image": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //             "avgRating":3.6,
    //         }
    //     },
    //     {
    //         "data" : {
    //             "id":1,
    //             "resName": "Haldirams",
    //             "cuisine":"",
    //             "image": "2f849d999918d411532dd1e8c24f29e0",
    //             "avgRating":4.1,
    //         }
    //     },
    //     {
    //         "data" : {
    //             "id":2,
    //             "resName": "Dominos",
    //             "cuisine":"Burger",
    //             "image": "aadw5xxrjtv6xxhtscai",
    //             "avgRating":4.8,
    //         }
    //     },
    //     {
    //         "data" : {
    //             "id":3,
    //             "resName": "CCD",
    //             "cuisine":"Burger",
    //             "image": "d96267738c19ec62acb5390e52faba41",
    //             "avgRating":3.8,
    //         }
    //     }
    // ]); before


    //here the useState function will give us the state and we will recieve the that state inside the array and give our variable i.e listOfRestauants inside that array .it is same as let listOfRestauants=[];with more powers.Then watever we pass inside the useState([]) it will become the default value to our variable.And wee use this listOfRestauants variables else where normally.
    // now the second argument i.e setListOfRestauants which  is a function name  to update the list of restauants the usual namimg of this function is array list name i.e listOfRestauants in our case i.e 1 argument prefixed with sett keyword.

    //whenever the state variable changes react will rerender the component.

    // let listOfRestauantsJs = [
    //     {
    //         "data" : {
    //             "id":0,
    //             "resName": "MCD",
    //             "cuisine":"Burger",
    //             "image": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //             "avgRating":3.6,
    //         }
    //     },
    //     {
    //         "data" : {
    //             "id":1,
    //             "resName": "Haldirams",
    //             "cuisine":"",
    //             "image": "2f849d999918d411532dd1e8c24f29e0",
    //             "avgRating":4.1,
    //         }
    //     },
    //     {
    //         "data" : {
    //             "id":2,
    //             "resName": "Dominos",
    //             "cuisine":"Burger",
    //             "image": "aadw5xxrjtv6xxhtscai",
    //             "avgRating":4.8,
    //         }
    //     },
    //     {
    //         "data" : {
    //             "id":3,
    //             "resName": "CCD",
    //             "cuisine":"Burger",
    //             "image": "d96267738c19ec62acb5390e52faba41",
    //             "avgRating":3.8,
    //         }
    //     }
    // ]

    // we can use mock data in useState as show below
    const [listOfRestauants, setListOfRestaunts] = useState(resList)
    //this is array destructioningie const listOfRestaunants=arr[0], const setListOfRest=arr[1];
    // SEE WAT DOES USESTATE RETURN TO U?

    return (
      <div className="body">
        <div className="filter">
            {/* here onCLick takes a callback function */}
            <button className="filter-btn" onClick={()=>{
                // listOfRestauants=listOfRestauants.filter((res) => res.data.avgRating > 4.0
                // ); before 2nd argument i.e setListOfRestauants
                const filteredList=listOfRestauants.filter((res) => res.data.avgRating > 4.0
                );
                setListOfRestaunts(filteredList);
                /*here the setListOfRestauantstakes the data that has to  be pushed into the listOfRestauants or the new data that has to be updated in the main state,If we want to make the ListOfRestauants empty then we can make it by using setListOfRestauants([]) by passing it an empty array */
                
            }
           }>Top Rated Restaurants</button>
        </div>
        <div className="resto-container">
          {
            //   resList.map(restaurant => {
            //       return <RestaurantCard key={restaurant?.data.id} resData={restaurant}/>
            //   })
              listOfRestauants.map(restaurant => {
                  return <RestaurantCard key={restaurant?.data.id} resData={restaurant}/>
              })
          }
        </div>
      </div>
    );
};

export default Body;