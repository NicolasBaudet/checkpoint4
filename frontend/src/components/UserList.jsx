import React from "react";
import PropTypes from "prop-types";

function UserList({ element }) {
  return (
    <div>
      <h1>firstname {element.firstname}</h1>
      <h1>Lastname {element.lastname}</h1>
    </div>
  );
}

UserList.propTypes = {
  element: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default UserList;
