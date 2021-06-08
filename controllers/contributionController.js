const db = require("../models");

// Defining methods for the ContributionController
module.exports = {
//   findAll: function (req, res) {
//     db.Contribution
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  create: function (req, res) {
    db.Contribution
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 };
