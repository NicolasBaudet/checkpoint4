/* eslint-disable camelcase */
import PropTypes from "prop-types";
import "./TravelItem.css";

function TravelItem2({
  id,
  country,
  price,
  // description,
  city,
  picture,
  resume,
  onclick,
  onsure2,
  sure2,
  functionNo2,
  functionYes2,
}) {
  return (
    <div
      className="travelCard"
      onClick={onsure2}
      key={id}
      onKeyDown={onclick}
      role="presentation"
    >
      <div className={sure2 ? "on" : "off"}>
        <div className="sureContainer">
          <div>Êtes-vous sûr de vouloir modifier ce voyage ?</div>
          <div className="sureButton">
            <div className="buttonYesNo">
              <button
                type="button"
                className="decisionBtn"
                onClick={functionYes2}
              >
                Oui
              </button>
            </div>
            <div className="buttonYesNo">
              <button
                type="button"
                className="decisionBtn"
                onClick={functionNo2}
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

TravelItem2.propTypes = {
  country: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  picture: PropTypes.bool.isRequired,
  resume: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
  onsure2: PropTypes.func.isRequired,
  functionNo2: PropTypes.func.isRequired,
  functionYes2: PropTypes.func.isRequired,
  sure2: PropTypes.string.isRequired,
};

export default TravelItem2;
