import { CDN_URL } from "../utills/constants"

const RestaurantCard = ({resData}) => {

    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime}= resData?.info
    return (
        <div className="res-card">
            <img className="res-image" src={CDN_URL + cloudinaryImageId}  alt="res-image"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime  } minutes</h4>
        </div>
        
    )
}

export default RestaurantCard