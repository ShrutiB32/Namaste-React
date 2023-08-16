import { CDN_URL,styleCard } from "../utils/constants";



const RestaurantCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card" style={styleCard}>
        <div>
          <img
            alt="resto pic"
            src={CDN_URL+resData?.data.image}
            className="res-logo"
          />
          <h3>{resData?.data.resName}</h3>
          <h4>{resData?.data.cuisine}</h4>
          <h4>{resData?.data.avgRating}</h4>
          {/* <h4>38 mins</h4> */}
        </div>
      </div>
    );
  };
export default RestaurantCard;