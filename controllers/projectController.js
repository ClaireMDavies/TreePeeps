const { Contribution } = require("../models");
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
    let lng = req.params.lng;
    let lat = req.params.lat;
    let dist = req.params.dist;
    db.Project.find({
      location: {
        $geoWithin: {
            $centerSphere: [[lng, lat], dist / 6371]
        }
      }
    }).find((error, results) => {
      if (error) {
        res.json(error);
      }
      res.json((results));
    });
  },
  setProjectStatus: function (req, res) {
    db.Project
      .findOneAndUpdate({ _id: req.params.id }, {status: req.body.status })
      .then(dbModel => res.json(dbModel))
      .catch(err => { console.log(err); res.status(422).json(err) });
  },
  addProjectContribution: function (req, res) {
    db.Project
      .findById(req.params.id)
      .then(dbModel => {
                dbModel.contributions.push(req.body);
                dbModel.save();
            })
      .catch(err => { console.log(err); res.status(422).json(err) });
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
      .catch(err => { console.log(err); res.status(422).json(err) });
  },
  remove: function (req, res) {
    db.Project
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserId: function (req, res) {
    db.Project
      .find({ owner: req.params.id })
      .populate("owner")
      .populate("contributions.user")
      .then(dbModel => res.json(dbModel));
  },
  findByContributedUserId: function (req, res) {

    // TODO: do we need to get distinct projects, in case user has contributed
    // more than once to the same project?

    db.Project
      .find({ "contributions.user": req.params.id })
      .populate("owner")
      .populate("contributions.user")
      .then(dbModel => res.json(dbModel));
  }
};
