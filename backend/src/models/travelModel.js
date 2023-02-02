/* eslint-disable camelcase */
const database = require("../../config");

const findAllTravels = () => {
  return database
    .promise()
    .query("SELECT * FROM travel")
    .then(([res]) => res);
};

const deleteOneTravel = (id) => {
  return database
    .promise()
    .query("DELETE FROM travel WHERE id = ?", [id])
    .then(([res]) => res);
};

const createOneTravel = (payload) => {
  return database
    .promise()
    .query("INSERT INTO travel SET ?", [payload])
    .then(([res]) => res);
};

module.exports = { findAllTravels, deleteOneTravel, createOneTravel };
