import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Autosuggest from "react-autosuggest";

// import style
import "./../../styles/navbar.css";
// import icon
import { FaRegTrashAlt } from "react-icons/fa";

//import logo
import logoImg from "./../../img/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [elements, setElements] = useState(store.alltogether);
  const [value, setValue] = useState("");
  const [selectedElement, SetSelectedElement] = useState(null);

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setElements(filterElements(value));
  };

  const filterElements = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let filtered = store.alltogether.filter((element) => {
      let text = element.name.toLowerCase();
      return text.includes(inputValue);
    });
    return inputLength === 0 ? [] : filtered;
  };
  const onSuggestionsClearRequested = () => {
    setElements([]);
  };
  const getSuggestionValue = (suggestion) => {
    return `${suggestion.name}`;
  };
  const renderSuggestion = (suggestion) => {
    return (
      <div onClick={() => selectElement(suggestion)}>{suggestion.name}</div>
    );
  };

  const selectElement = (element) => {
    const urlParts = element.url.split("/");
    let type = urlParts[urlParts.length - 2];
    if (type === "people") {
      type = "characters";
      SetSelectedElement({ ...element, type });
    } else {
      SetSelectedElement({ ...element, type });
    }
  };
  const onChange = (e, { newValue }) => {
    setValue(newValue);
  };
  const inputProps = {
    value,
    onChange,
  };

  const eventEnter = (e) => {
    if (e.key == "Enter") {
      let search = e.target.value;
      selectElement(search);
    }
  };

  return (
    <nav className=" navbar fixed-top">
      <div className="logo">
        <Link to="/">
          <img
            className="navbar-brand star-logo"
            src={logoImg}
            alt="star Wars logo"
          />
        </Link>
      </div>

      <div className="dropdown favorites d-flex ">
        <div className="me-1 align-self-center d-flex">
          <Autosuggest
            suggestions={elements}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            onSuggestionSelected={eventEnter}
          />
          <button
            className="search-btn ms-1"
            onClick={() => {
              if (selectedElement !== null) {
                navigate(
                  `single/${selectedElement.type}/${selectedElement.uid}`
                );
                setValue("");
              }
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="btn dropdown-fav-btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul
            className="dropdown-menu fav--list__ul"
            aria-labelledby="dropdownMenuButton1"
            onClick={handleDropdownClick}
            style={{
              display: !store.favItem.length > 0 && "none",
            }}
          >
            {store.favItem.map((element) => {
              return (
                <li className="list-element" key={element.uid}>
                  <span
                    onClick={() =>
                      navigate(`/single/${element.category}/${element.uid}`)
                    }
                  >
                    {element.name}
                  </span>
                  <FaRegTrashAlt
                    className="ms-1"
                    onClick={() => actions.deleteFromFavorites(element)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
