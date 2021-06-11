const db = require("../models");

// Defining methods for the ContributionController
module.exports = {
  findById: function (req, res) {
    db.Contribution
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Contribution
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
