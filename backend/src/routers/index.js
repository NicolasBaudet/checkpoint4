const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const travelRouter = require("./travelRouter");

router.use("/user", userRouter);
router.use("/travel", travelRouter);

module.exports = router;
