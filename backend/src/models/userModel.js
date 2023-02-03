/* eslint-disable camelcase */
const database = require("../../config");

const findAllUsers = () => {
  return database
    .promise()
    .query("SELECT * FROM user")
    .then(([res]) => res);
};

module.exports = { findAllUsers };
