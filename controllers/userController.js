const Joi = require("joi");
const { NavbarText } = require("reactstrap");
const db = require("../models");
const signupSchema = Joi.object({
    username: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().trim().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
})



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
    create: function (req, res) {
        /*
        const {error, value } = signupSchema.validate(req.body);
        if (error) {
            return res.status(400).json({success:false, payload:{message:error.message}});
        }
        */

        db.User
            .create(req.body)
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