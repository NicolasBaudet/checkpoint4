/* eslint-disable camelcase */
import PropTypes from "prop-types";
import "./TravelItem.css";

function TravelItem({
  id,
  country,
  price,
  // description,
  city,
  picture,
  resume,
  onclick,
  onsure,
  sure,
  functionNo,
  functionYes,
}) {
  return (
    <div
      className="travelCard"
      onClick={onsure}
      key={id}
      onKeyDown={onclick}
      role="presentation"
    >
      <div className={sure ? "on" : "off"}>
        <div className="sureContainer">
          <div>Êtes-vous sûr de vouloir supprimer ce voyage ?</div>
          <div className="sureButton">
            <div className="buttonYesNo">
              <button
                type="button"
                className="decisionBtn"
                onClick={functionYes}
              >
                Oui
              </button>
            </div>
            <div className="buttonYesNo">
              <button
                type="button"
                className="decisionBtn"
                onClick={functionNo}
              >
                Non
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row1">
        <div>{country}</div>
        <div>{city}</div>
      </div>
      <div className="row2">
        <div>
          <img src={picture} alt="Paris" />
        </div>
        <div> {price} €</div>
      </div>
      <div className="row3"> {resume}</div>
    </div>
  );
}

TravelItem.propTypes = {
  country: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  picture: PropTypes.bool.isRequired,
  resume: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
  onsure: PropTypes.func.isRequired,
  functionNo: PropTypes.func.isRequired,
  functionYes: PropTypes.func.isRequired,
  sure: PropTypes.string.isRequired,
};

export default TravelItem;
