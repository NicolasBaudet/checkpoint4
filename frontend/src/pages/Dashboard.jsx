import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import api from "../services/api";
import SideBar from "../components/Home/SideBar";
import NavBarDashboard from "../components/Dashboard/NavBarDashboard";
import dataDecisionType from "../Tools/dataDecisionType";
import TravelItem from "../components/Travel/TravelItem";
import TravelItem2 from "../components/Travel/TravelItem2";
import FormAdd from "../components/Dashboard/FormAdd";

export default function Dashboard() {
  const [status, setStatus] = useState(0);
  const [allTravels, setAllTravels] = useState();
  const [deleted, setDeleted] = useState();
  const [sure, setSure] = useState(false);
  const [sure2, setSure2] = useState(false);
  const [newTravel, setNewTravel] = useState({});
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

  const modifyOneTravel = () => {
    // allTravelsMap = (
    //   <FormAdd
    //     newTravel={newTravel}
    //     setNewTravel={setNewTravel}
    //     onclick={() => modifyOneTravel(newTravel)}
    //     status={status}
    //   />
    // );
    // setNewTravel(e);
    setStatus(4);
    // console.log("nonnnnnnn");
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

  const handleSure2 = () => {
    setSure2(true);
  };

  const handleDelete = () => {
    // console.log(id, "id");
    // api.delete(`travel/${id}`).then((response) => setDeleted(response));
  };

  const functionNo = () => {
    setDeleted("response");
  };

  const functionNo2 = () => {
    setDeleted("response");
  };

  // const functionYes2 = (id) => {
  //   console.log(id, "e");
  // };

  const createOneTravel = (e) => {
    api.post("/travel", e);
    setStatus(0);
  };
  useEffect(() => {
    setSure(false);
    getAllTravels();
  }, [deleted, status]);

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
          />
        ));
        break;
      case 1:
        allTravelsMap = (
          <FormAdd
            newTravel={newTravel}
            setNewTravel={setNewTravel}
            onclick={() => createOneTravel(newTravel)}
          />
        );
        break;
      case 2:
        allTravelsMap = allTravels.map((travelItem) => (
          <TravelItem2
            key={travelItem.id}
            id={travelItem.id}
            country={travelItem.country}
            price={travelItem.price}
            description={travelItem.description}
            city={travelItem.city}
            picture={travelItem.picture}
            resume={travelItem.resume}
            onsure2={() => handleSure2()}
            functionModify={(e) => modifyOneTravel(e)}
            functionNo2={() => functionNo2()}
            functionYes2={() => handleDelete(travelItem.id)}
            sure2={sure2}
            status={status}
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
            status={status}
          />
        ));
        break;
      case 4:
        allTravelsMap = (
          <FormAdd
            newTravel={newTravel}
            setNewTravel={setNewTravel}
            onclick={() => modifyOneTravel(newTravel.price)}
            status={status}
          />
        );
        // console.log(newTravel, "ici");
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

  // console.log(status, "status");
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
