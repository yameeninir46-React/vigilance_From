// console.log("reportRoutes loaded");

const express = require("express");
const router = express.Router();
const Report = require("./report");

// TEST ROUTE
router.get("/test", (req, res) => {
  res.send("Route Working ");
});

// GET by BP Number
router.get("/:bpNumber", async (req, res) => {
  try {
    const data = await Report.findOne({ bpNumber: req.params.bpNumber });

    if (!data) {
      return res.status(404).send("No data found");
    }

    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});


// CREATE
router.post("/add", async (req, res) => {
  try {
    if (!req.body.bpNumber || req.body.bpNumber.trim() === "") {
      return res.status(400).send("BP Number is required");
    }

    const data = new Report(req.body);
    await data.save();

    res.send("Report Saved");
  } catch (err) {
    res.status(500).send(err);
  }
}); 

// GET ALL
router.get("/", async (req, res) => { 
  const data = await Report.find();
  res.json(data);
});


module.exports = router;
