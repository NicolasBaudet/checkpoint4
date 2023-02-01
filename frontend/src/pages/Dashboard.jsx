import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import api from "../services/api";
import SideBar from "../components/Home/SideBar";
import NavBarDashboard from "../components/Dashboard/NavBarDashboard";
import dataDecisionType from "../Tools/dataDecisionType";
import TravelItem from "../components/Travel/TravelItem";
import FormAdd from "../components/Dashboard/FormAdd";

export default function Dashboard() {
  const [status, setStatus] = useState(0);
  const [allTravels, setAllTravels] = useState();
  const [deleted, setDeleted] = useState();
  const [sure, setSure] = useState(false);
  let allTravelsMap = 0;

  const handleClick = (e) => {
    switch (e.target.name) {
      case "Afficher tous les voyages":
        setStatus(0);
        break;
      case "Ajouter un voyage":
        setStatus(1);
        break;
      case "Modifier un voyage":
        setStatus(2);
        break;
      case "Supprimer un voyage":
        setStatus(3);
        break;
      default:
        setStatus(0);
        break;
    }
  };

  const getAllbuttons = () => {
    return dataDecisionType.map((button) => (
      <button
        type="button"
        onClick={handleClick}
        className="decisionBtn"
        name={button}
      >
        {button}
      </button>
    ));
  };
  useEffect(() => {
    getAllbuttons();
  }, []);

  const getAllTravels = async () => {
    await api.get("travel").then((response) => setAllTravels(response.data));
  };

  useEffect(() => {
    getAllTravels();
  }, []);

  const handleSure = () => {
    setSure(true);
  };

  const handleDelete = (id) => {
    api.delete(`travel/${id}`).then((response) => setDeleted(response));
  };

  const functionNo = () => {
    setDeleted("response");
  };

  useEffect(() => {
    setSure(false);
    getAllTravels();
  }, [deleted]);

  if (allTravels) {
    switch (status) {
      case 0:
        allTravelsMap = allTravels.map((travelItem) => (
          <TravelItem
            key={travelItem.id}
            id={travelItem.id}
            country={travelItem.country}
            price={travelItem.price}
            description={travelItem.description}
            city={travelItem.city}
            picture={travelItem.picture}
            resume={travelItem.resume}
            toto={0}
          />
        ));
        break;
      case 1:
        allTravelsMap = <FormAdd />;
        break;
      case 2:
        allTravelsMap = allTravels.map((travelItem) => (
          <TravelItem
            key={travelItem.id}
            id={travelItem.id}
            country={travelItem.country}
            price={travelItem.price}
            description={travelItem.description}
            city={travelItem.city}
            picture={travelItem.picture}
            resume={travelItem.resume}
            toto={2}
          />
        ));
        break;
      case 3:
        allTravelsMap = allTravels.map((travelItem) => (
          <TravelItem
            key={travelItem.id}
            id={travelItem.id}
            country={travelItem.country}
            price={travelItem.price}
            description={travelItem.description}
            city={travelItem.city}
            picture={travelItem.picture}
            resume={travelItem.resume}
            onsure={() => handleSure()}
            functionNo={() => functionNo()}
            functionYes={() => handleDelete(travelItem.id)}
            sure={sure}
          />
        ));
        break;
      default:
        allTravelsMap = allTravels.map((travelItem) => (
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
    }
  }

  return (
    <div className="dashboardContainer">
      <div className="navBarDashboard">
        <NavBarDashboard getAllbuttons={getAllbuttons} />
      </div>
      <div className="dashboardBody">{allTravelsMap}</div>
      <div className="sideBar">
        <SideBar />
      </div>
    </div>
  );
}
