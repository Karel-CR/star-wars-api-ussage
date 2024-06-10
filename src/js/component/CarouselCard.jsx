import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

//import style
import "./../../styles/CarouselCard.css";

//import icon
import { FaRegStar } from "react-icons/fa";

const CarouselCard = ({ element, type, handleFavElement }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="card-container ">
      <div className="img-container">
        <img
          src={
            type === "planets" && element.uid === "1"
              ? "https://i.pinimg.com/474x/9f/d0/02/9fd00203ccb2d3b53270623f7c5e8482.jpg"
              : `https://starwars-visualguide.com/assets/img/${type}/${element.uid}.jpg`
          }
          className={
            type === "vehicles"
              ? "card-img imgen-vehicle"
              : "card-img imgen-card"
          }
          alt={`image of ${type} ${element.name}`}
        ></img>
      </div>
      <div className="card-body">
        <h5 className="card-title">{element.name}</h5>
        <div className="button-container">
          <button
            className="learn-btn"
            onClick={() => navigate(`/single/${type}/${element.uid}`)}
          >
            Learn more
          </button>

          <FaRegStar
            className="btn star-icon"
            onClick={() => handleFavElement(element, type)}
          />
        </div>
      </div>
    </div>
  );
};
export default CarouselCard;
