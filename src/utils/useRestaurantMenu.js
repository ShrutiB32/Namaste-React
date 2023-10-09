import { useEffect , useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] =useState(null);

    useEffect(() => {
        fetchData();
    },[]);
    //we use empty square brackets to fetch the data only once.

    const fetchData = async() => {
        const data = await fetch(MENU_API+ resId)
        const json = await data.json();
    
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;