/* eslint-disable camelcase */
import { useState } from "react";
import "./FormAdd.css";

function FormAdd() {
  const [newTravel, setNewTravel] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    // e.preventDefault();
    if (newTravel) {
      setNewTravel({ ...newTravel, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="addContainer">
      <div className="addTravelTitle">
        Formulaire de création d'un nouveau voyage
      </div>
      <form action="submit" onSubmit={handleSubmit}>
        <div className="city">
          <div className="cityRow">
            <input
              type="text"
              className="imputProfil"
              name="country"
              placeholder="Pays à visiter..."
              onChange={handleChange}
            />
          </div>
          <div className="cityRow">
            <input
              type="text"
              className="imputProfil"
              name="city"
              placeholder="Ville..."
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="bottomContainer">
          <div className="price">
            <input
              type="text"
              className="imputProfil"
              name="price"
              placeholder="Prix du voyage..."
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="resume"
              name="resume"
              placeholder="Résumé..."
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              type="text"
              className="description"
              name="description"
              placeholder="Description complète..."
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

FormAdd.propTypes = {};

export default FormAdd;
