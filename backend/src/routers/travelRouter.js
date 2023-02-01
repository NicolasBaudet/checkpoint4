const express = require("express");

const travelRouter = express.Router();

const travelController = require("../controllers/travelControllers");

travelRouter.get("/", travelController.getAllTravels);
travelRouter.delete("/:id", travelController.deleteOneTravel);

module.exports = travelRouter;
