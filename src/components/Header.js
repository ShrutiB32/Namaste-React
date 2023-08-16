import { LOGO_URL } from "../utils/constants";

 const HeaderComponent = () => {
    return (
      <div className="header">
        <div>
          <img
            src={LOGO_URL}
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul className="items">
            <li>Home</li>
            <li>About Us</li>
            <li>Conatct US</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  //there are 2 ways to export 
  //this is mtd 1
  export default HeaderComponent