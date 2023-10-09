import { useState, useEffect } from "react";
import useSWR from "swr";
import { fetchData } from "../../api/fetchApi";
import { Restaurant } from "../../types/types";

const RestaurantList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { data, error } = useSWR<Restaurant[]>("restaurantData", fetchData);

  useEffect(() => {
    if (data || error) {
      setLoading(false);
    }
  }, [data, error]);

  if (error) {
    return <div className="error">Error loading data.</div>;
  }

  return (
    <div className="App">
      <h1 className="header">All Restaurants</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="restaurant-container">
          {data ? (
            <div className="restaurant-row">
              {data.slice(4).map((restaurant, index) => (
                <div key={restaurant.location_id} className="restaurant-item">
                  {restaurant.photo && restaurant.photo.images.large.url && (
                    <div className="overlay-effect">
                      <img
                        src={restaurant.photo.images.large.url}
                        alt={`Image for ${restaurant.name}`}
                        className="restaurant-item-img"
                      />
                    </div>
                  )}
                  <p className="name">{restaurant.name}</p>
                  <p>Rating: {restaurant.rating}</p>
                  <p>{restaurant.address_obj.street1}</p>
                  <p>Phone: {restaurant.phone}</p>
                  {/* Displaying cuisine names */}
                  {restaurant.cuisine && (
                    <p className="cuisine">
                      {index === 3 ? (
                        <>
                          <span className={`cuisine-item-0`}>
                            {restaurant.cuisine[2].name}
                          </span>
                          <span className={`cuisine-item-2`}>
                            {restaurant.cuisine[0].name}
                          </span>
                        </>
                      ) : (
                        restaurant.cuisine.slice(0, 2).map((cuisine, index) => (
                          <span
                            key={cuisine.key}
                            className={`cuisine-item-${index}`}
                          >
                            {cuisine.name}
                          </span>
                        ))
                      )}
                    </p>
                  )}
                  <p className="link">
                    <a
                      href={restaurant.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      More info
                    </a>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div>Error loading data.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
