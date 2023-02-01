/* eslint-disable camelcase */
const userModel = require("../models/userModel");

const userController = {
  getAllUsers: (req, res) => {
    userModel
      .findAllUsers()
      .then((rows) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
};

module.exports = userController;
