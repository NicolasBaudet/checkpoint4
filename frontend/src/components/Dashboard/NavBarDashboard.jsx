/* eslint-disable camelcase */
import PropTypes from "prop-types";
import "./NavBarDashboard.css";

function NavBarDashboard({ getAllbuttons }) {
  return <div className="navBarDashboardContainer">{getAllbuttons()}</div>;
}

NavBarDashboard.propTypes = {
  getAllbuttons: PropTypes.func.isRequired,
};

export default NavBarDashboard;
