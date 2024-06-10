import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

//import component
import CarouselCard from "./../component/CarouselCard.jsx";

//import styles
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const handleFavElement = (element, type) => {
    actions.addToFavorites(element, type);
  };

  return (
    <>
      <div className="carousel carousel-top d-flex flex-row flex-nowrap row-cols-1 row-cols-md-5 g-1 overflow-auto mb-3 ">
        {store.characters.map((element) => {
          return (
            <CarouselCard
              element={element}
              type="characters"
              key={element.uid}
              handleFavElement={handleFavElement}
            />
          );
        })}
      </div>
      <div className="carousel d-flex flex-row flex-nowrap row-cols-1 row-cols-md-5 g-2 overflow-auto mb-3 mt-3">
        {store.planets.map((element) => {
          return (
            <CarouselCard
              element={element}
              type="planets"
              key={element.uid}
              handleFavElement={handleFavElement}
            />
          );
        })}
      </div>
      <div className="carousel carousel-bottom d-flex flex-row flex-nowrap row-cols-1 row-cols-md-5 g-2 overflow-auto">
        {store.vehicles.map((element) => {
          return (
            <CarouselCard
              element={element}
              type="vehicles"
              key={element.uid}
              handleFavElement={handleFavElement}
            />
          );
        })}
      </div>
    </>
  );
};
