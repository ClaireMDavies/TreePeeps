const { NavbarText } = require("reactstrap");
const db = require("../models");




// Defining methods for the userController - findbyId and create
//included update and delete but not really needed
module.exports = {
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
    usernameExists: function (req, res) {

        db.User.findOne({ username: req.params.username }, function (err, user) {

            if (err) {
                res.status(422).send();
            }
            else if (user) {
                res.status(200).send();
            }
            else {
                res.status(404).send();
            }
        });

        /*
        // make the seerch case-insensitive
        db.User
        .findOne({username:{'$regex' : `^${req.params.username}$`, '$options' : 'i'}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
        */
    }
}