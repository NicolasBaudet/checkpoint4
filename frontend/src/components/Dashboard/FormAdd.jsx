/* eslint-disable camelcase */
import PropTypes from "prop-types";
import "./FormAdd.css";

function FormAdd({ newTravel, setNewTravel, onclick, status }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onclick();
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
              placeholder={
                status === 4 ? newTravel.country : "Pays à visiter..."
              }
              onChange={handleChange}
            />
          </div>
          <div className="cityRow">
            <input
              type="text"
              className="imputProfil"
              name="city"
              placeholder={status === 4 ? newTravel.city : "Ville..."}
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
              placeholder={status === 4 ? newTravel.price : "Prix du voyage..."}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="resume"
              name="resume"
              placeholder={status === 4 ? newTravel.resume : "Résumé..."}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              type="text"
              className="description"
              name="description"
              placeholder={
                status === 4 ? newTravel.description : "Description complète..."
              }
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

FormAdd.propTypes = {
  newTravel: PropTypes.string.isRequired,
  setNewTravel: PropTypes.string.isRequired,
  onclick: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default FormAdd;
