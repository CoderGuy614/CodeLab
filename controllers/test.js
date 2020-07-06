const Test = require("../models/Test");
const { restart } = require("nodemon");

exports.testGetFunction = (req, res) => {
  return res.json({ message: "IT'S WORKING" });
};

exports.testPostFunction = (req, res) => {
  console.log(req.body);
  const name = new Test(req.body);
  name.save((err, name) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({ name });
  });
};
