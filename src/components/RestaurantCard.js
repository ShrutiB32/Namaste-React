import { CDN_URL,styleCard } from "../utils/constants";



const RestaurantCard = (props) => {
    const { resData } = props;
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200">
        <div>
          <img
            alt="resto pic"
            src={CDN_URL+resData?.info?.cloudinaryImageId}
            className="rounded-lg"
          />
          <h3 className="font-bold py-2 text-lg">{resData?.info?.name}</h3>
          <h4>{resData?.info?.cuisines.join()}</h4>
          <h4>{resData?.info?.avgRating}</h4>
          {/* <h4>38 mins</h4> */}
        </div>
      </div>
    );
  };
export default RestaurantCard;