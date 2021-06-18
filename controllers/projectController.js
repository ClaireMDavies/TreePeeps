const { Contribution } = require("../models");
const db = require("../models");

// Defining methods for the projectController
module.exports = {
  // Find all projects
  findAll: function (req, res) {
    db.Project
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Find one project by id
  findById: function (req, res) {
    db.Project
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Create new project
  create: function (req, res) {
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Find a project by id and update it
  update: function (req, res) {
    db.Project
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => { console.log(err); res.status(422).json(err) });
  },
  // Find project by Id and remove it
  remove: function (req, res) {
    db.Project
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Find projects by location and radius
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
  // Find one project and update its status
  setProjectStatus: function (req, res) {
    db.Project
      .findOneAndUpdate({ _id: req.params.id }, { status: req.body.status })
      .then(dbModel => res.json(dbModel))
      .catch(err => { console.log(err); res.status(422).json(err) });
  },
  // Find project by id and add contribution 
  addProjectContribution: function (req, res) {
    db.Project
      .findById(req.params.id)
      .then(dbModel => {
        dbModel.contributions.push(req.body);
        dbModel.save();
      })
      .catch(err => { console.log(err); res.status(422).json(err) });
  },
  // Find project by owner Id and populate the owner info and the contributed user info
  findByUserId: function (req, res) {
    db.Project
      .find({ owner: req.params.id })
      .populate("owner")
      .populate("contributions.user")
      .then(dbModel => res.json(dbModel));
  },
  // Find project by contributed user and populate the owner field and the contributions.user field 
  findByContributedUserId: function (req, res) {
    db.Project
      .find({ "contributions.user": req.params.id })
      .populate("owner")
      .populate("contributions.user")
      .then(dbModel => res.json(dbModel));
  },
  deleteContribution: function (req, res) {
    db.Project
      .findOneAndUpdate({ _id: req.params.id },
        { "$pull": { "contributions": { "_id": req.params.contributionId } } })
      // .then(dbModel => dbModel.contributions.remove())
      // .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
