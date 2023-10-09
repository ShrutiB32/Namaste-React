import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";
//ep07 part 7 index6.js

 const HeaderComponent = () => {
  // let btnName="Login";
  const [btnName, setbtnName] = useState("Login");
  
  //ep09 part 3 : to showonline and offline green and red dot.
  const onlineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between shadow-lg sm:bg-pink-400">
        <div>
          <img
            src={LOGO_URL}
            className="w-32"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4 gap-3">
            <li>
              Online Status: { onlineStatus === true ? "🟢":"🔴"}
            </li>
        
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            {/* <li><a href="/about">About Us</a></li> refer index6.js part 4*/}
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Conatct Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            {/* //ep06 part 5 deep dive into useState: for this we create a login button where on click of the button we have to change the text of the button to logout dynaically, so for that we create a local variable called btnName with "Login" as default value*/}
            <button className="login" onClick={()=>{
              
              btnName=== "Login" ? setbtnName("Logout"):setbtnName
              ("Login");
                //ep06 part 5 whenevr the useState variable value changes using setbtnName react will rerender that particular component here it is header component.
            }}>{btnName}</button> 
          </ul>
        </div>
      </div>
    );
  };

  //there are 2 ways to export 
  //this is mtd 1
  export default HeaderComponent