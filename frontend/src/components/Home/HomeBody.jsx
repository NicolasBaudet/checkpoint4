import React, { useEffect, useState } from "react";
import "./HomeBody.css";
import api from "../../services/api";
import TravelItem from "../Travel/TravelItem";

export default function Homebody() {
  const [allTravels, setAllTravels] = useState([]);
  // const [popup, setPopup] = useState(false);

  // const handleShow = () => {
  //   setPopup(!popup);
  // };

  const getAllTravels = () => {
    api.get("travel").then((response) => setAllTravels(response.data));
  };

  useEffect(() => {
    getAllTravels();
  }, []);

  const allTravelsMap = allTravels.map((travelItem) => (
    <TravelItem
      key={travelItem.id}
      id={travelItem.id}
      country={travelItem.country}
      price={travelItem.price}
      description={travelItem.description}
      city={travelItem.city}
      picture={travelItem.picture}
      resume={travelItem.resume}
    />
  ));

  return (
    <div className="body">
      {/* <div className={popup ? "popupOn" : "popupOff"}>toto</div> */}
      {allTravelsMap}
    </div>
  );
}
