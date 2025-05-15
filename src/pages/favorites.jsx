import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Favorites = () => {
    const { store } = useGlobalReducer();

    return (
        <div className="container">
            <h2>Favorites</h2>
            <ul className="list-group">
                {store.favourites.map((item, index) => (
                    <li key={index} className="list-group-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;