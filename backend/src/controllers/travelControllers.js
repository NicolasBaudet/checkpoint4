/* eslint-disable camelcase */
const travelModel = require("../models/travelModel");

const travelController = {
  getAllTravels: (req, res) => {
    travelModel
      .findAllTravels()
      .then((rows) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  deleteOneTravel: (req, res, next) => {
    const { id } = req.params;
    travelModel
      .deleteOneTravel(id)
      .then((response) => {
        if (response.affectedRows !== 1) {
          return res.status(404).send(`user ${id} not found`);
        }
        return res.status(200).send(`user ${id} deleted`);
      })
      .catch((err) => next(err));
  },
};

module.exports = travelController;
