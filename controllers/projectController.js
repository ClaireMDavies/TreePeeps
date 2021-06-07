const db = require("../models");

// Defining methods for the ProjectsController
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
    let lng = -0.1277583;
    let lat = 51.5073509;
    db.Project.find({
      location: {
       $near: {
        $maxDistance: 1000,
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
      console.log(JSON.stringify(results, 0, 2));
      res.json(JSON.stringify(results, 0, 2));
     });
  },
  create: function (req, res) {
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
   }

  //   update: function(req, res) {
  //     db.Project
  //       .findOneAndUpdate({ _id: req.params.id }, req.body)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   remove: function(req, res) {
  //     db.Project
  //       .findById({ _id: req.params.id })
  //       .then(dbModel => dbModel.remove())
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
};
