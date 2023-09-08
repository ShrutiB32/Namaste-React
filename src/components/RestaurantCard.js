import { CDN_URL,styleCard } from "../utils/constants";



const RestaurantCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card" style={styleCard}>
        <div>
          <img
            alt="resto pic"
            src={CDN_URL+resData?.info?.cloudinaryImageId}
            className="res-logo"
          />
          <h3>{resData?.info?.name}</h3>
          <h4>{resData?.info?.cuisines.join()}</h4>
          <h4>{resData?.info?.avgRating}</h4>
          {/* <h4>38 mins</h4> */}
        </div>
      </div>
    );
  };
export default RestaurantCard;