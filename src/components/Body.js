import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { useState, useEffect } from "react"

const Body = () => {
    const [resData, setResData] =useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] =useState('')

    const  fetchData = async () =>{
        const  data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3999643&lng=77.2704196&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        
        const json = await data.json()

        setResData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


    }

    useEffect(()=>{
        fetchData();
        
    },[])
    
    
    return  resData?.length ===0 ? <Shimmer/> : (<div className="body">
            <div className="filter">
            <div className="search"><input type="text" placeholder="Search" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
            <button className="search-btn" onClick={()=> {
                const filteredRestaurants = resData.filter((x) => x.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurants(filteredRestaurants)
            }}>Search</button></div>    
            <button className="filter-btn" onClick={() => setResData(resData.filter(x => x.info.avgRating > 4.3))}>Top Rated Restaurant</button>  
            </div>
            {console.log(resData)}
            <div className="res-container">
                {filteredRestaurants?.map((resObj)=> <RestaurantCard resData = {resObj} key={resObj.info.id}/>)
                }
            </div>
        </div>
    )

}

export default Body