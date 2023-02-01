import React from "react";
import PropTypes from "prop-types";
import "./DashboardBody.css";

export default function Homebody({ allTravelsMap }) {
  return <div className="body">{allTravelsMap}</div>;
}
Homebody.propTypes = {
  allTravelsMap: PropTypes.string.isRequired,
};
