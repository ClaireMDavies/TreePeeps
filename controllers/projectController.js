const db = require("../models");

// Defining methods for the projectController
module.exports = {
  findAll: function (req, res) {
    db.Project
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Project
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByLocation: function (req, res) {
    let lng = req.query.lng;
    let lat = req.query.lat;
    let dist = req.query.dist;
    db.Project.find({
      location: {
        $near: {
          $maxDistance: dist,
          $geometry: {
            type: "Point",
            coordinates: [lng, lat]
          }
        }
      }
    }).find((error, results) => {
      if (error) {
        res.json(error);
      }
      res.json((results));
    });
  },
  create: function (req, res) {
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Project
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Project
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
