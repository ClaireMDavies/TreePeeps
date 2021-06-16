const db = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();

// Defining methods for the userController
module.exports = {
    // Finding all users
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Finding one user by id
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Creating new user
    create: function (req, res) {
        db.User.findOne({ email: req.body.email }, function (err, user) {
            if (err) {
                res.status(422);
            }
            else if (user) {
                res.status(409);
            }
            else {
                db.User
                    .create(req.body)
                    .then((user) => {
                        res.json({ userId: user._id }).send();
                    })
                    .catch(err => res.status(422).json(err));
            }
        });
    },
    // Finding user by Id and updating it
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Finding user by Id and removing it
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Finding user by username and checking if the username already exists
    usernameExists: function (req, res) {
        db.User.findOne({ username: { '$regex': `^${req.params.username}$`, '$options': 'i' } }, function (err, user) {
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
    },
    // Finding user by email and checking if the password matches the email
    login: function (req, res) {
        const emailAddress = req.body.emailAddress;
        const password = req.body.password;
        db.User.findOne({ email: emailAddress }, function (err, user) {
            if (user) {
                const passwordMatches = bcrypt.compareSync(password, user.password);
                if (!passwordMatches) {
                    res.status(401).send();
                }
                else {
                    res.json({ userId: user._id }).send();
                }
            }
            else {
                res.status(401).send();
            }
        });
    }
}
