import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../store/consts";

//import style
import "../../styles/SingleElement.css";

export const SingleElement = () => {
  const params = useParams();
  const [characteristics, setCharacteristics] = useState({});
  const [element, setElement] = useState({});

  const getIndividualcharacteristics = async () => {
    try {
      if (params.type === "characters") {
        const response = await fetch(URL + `/people/${params.uid}`);
        const data = await response.json();
        if (response.ok) {
          setElement(data.result);
          setCharacteristics(data.result.properties);
        }
      } else {
        const response = await fetch(URL + `/${params.type}/${params.uid}`);
        const data = await response.json();
        if (response.ok) {
          setElement(data.result);
          setCharacteristics(data.result.properties);
        }
      }
    } catch (error) {
      console.log("Error loading data", error);
    }
  };
  useEffect(() => {
    getIndividualcharacteristics();
  }, [params.uid]);

  switch (params.type) {
    case "characters":
      return (
        <div className="single-view-container">
          <section className="introduction-container">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`}
              alt={`image of ${characteristics.name}`}
              className="single-img"
            />
            <div className="name-descp-container">
              <h1>{characteristics.name}</h1>
              <h2>{element.description}</h2>
            </div>
          </section>
          <section className="characteristics-container">
            <div>
              <h5>Birth year</h5>
              <p>{characteristics.birth_year}</p>
            </div>
            <div>
              <h5>Gender</h5>
              <p>{characteristics.gender}</p>
            </div>
            <div>
              <h5>Height</h5>
              <p>{characteristics.height}</p>
            </div>
            <div>
              <h5>Skin Color</h5>
              <p>{characteristics.skin_color}</p>
            </div>
            <div>
              <h5>Eye Color</h5>
              <p>{characteristics.eye_color}</p>
            </div>
          </section>
        </div>
      );

    case "planets":
      return (
        <div className="single-view-container">
          <section className="introduction-container">
            <img
              src={
                element.uid === "1"
                  ? "https://i.pinimg.com/474x/9f/d0/02/9fd00203ccb2d3b53270623f7c5e8482.jpg"
                  : `https://starwars-visualguide.com/assets/img/planets/${element.uid}.jpg`
              }
            />
            <div className="name-descp-container">
              <h1>{characteristics.name}</h1>
              <h2>{element.description}</h2>
            </div>
          </section>
          <section className="characteristics-container">
            <div>
              <h5>Diameter</h5>
              <p>{characteristics.diameter}</p>
            </div>
            <div>
              <h5>Orbital Period</h5>
              <p>{characteristics.orbital_period}</p>
            </div>
            <div>
              <h5>Gravity</h5>
              <p>{characteristics.gravity}</p>
            </div>
            <div>
              <h5>Population</h5>
              <p>{characteristics.population}</p>
            </div>
            <div>
              <h5>Climate</h5>
              <p>{characteristics.climate}</p>
            </div>
            <div>
              <h5>Terrain</h5>
              <p>{characteristics.terrain}</p>
            </div>
          </section>
        </div>
      );

    case "vehicles":
      return (
        <div className="single-view-container">
          <section className="introduction-container">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${element.uid}.jpg`}
              alt={`image of ${characteristics.name}`}
              className="single-img"
            />
            <div className="name-descp-container">
              <h1>{characteristics.name}</h1>
              <h2>{element.description}</h2>
            </div>
          </section>
          <section className="characteristics-container">
            <div>
              <h5>Model</h5>
              <p>{characteristics.model}</p>
            </div>
            <div>
              <h5>Vehicle Class</h5>
              <p>{characteristics.vehicle_class}</p>
            </div>
            <div>
              <h5>Manufacturer</h5>
              <p>{characteristics.manufacturer}</p>
            </div>
            <div>
              <h5>Cost in Credits</h5>
              <p>{characteristics.cost_in_credits}</p>
            </div>
            <div>
              <h5>Crew</h5>
              <p>{characteristics.crew}</p>
            </div>
          </section>
        </div>
      );

    default:
      return null;
  }
};
