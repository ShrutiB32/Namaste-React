import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//this is the hook to read the id from the url which is given by react-router-dom
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);   commented in ep09 part2


//how to use useParams() 
    const params =useParams();
    console.log(params);
//here above we get params as an object where resId is present as key so instead we ca destructure as shown below

  const {id} = useParams();


//ep 09 part 2 this is uses the custom hook to get the data to display cards instead of using the useState in same component to get the data so the above line "const [resInfo, setResInfo] = useState(null);" gets commented 
  const resInfo = useRestaurantMenu(id);
  console.log(id);


//commented in ep09 part 2 because of single responsilbility and use of custom hooks

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //   MENU_API+ id
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join()} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price  || item.card.info.defaultPrice}</li>  
        ))}
        {/* <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
