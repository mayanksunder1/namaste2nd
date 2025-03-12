import RestaurantCard from "./RestaurantCard"
import { RES_OBJ } from "../utills/mockData"
import { useState } from "react"

const Body = () => {
    const [resData, setResData] =useState(RES_OBJ)

    console.log(resData);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => setResData(resData.filter(x => x.info.avgRating > 4.3))}>Top Rated Restaurant</button>      
            </div>
            <div className="res-container">
                {resData?.map((resObj)=> <RestaurantCard resData = {resObj} key={resObj.info.id}/>)
                }
            </div>
        </div>
    )
}

export default Body