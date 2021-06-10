const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
        console.log('req.body:', req.body);

    //     db.User.findOne({ email: req.body.emailAddress }, function (err, user) {

    //     if (err) {
    //         res.status(422).send();
    //     }
    //     else if (user) {
    //         res.status(200).send();
    //     }
    //     else {
    //         res.status(404).send();
    //     }
    // });

        



        db.User
            .create(req.body)
            .then((user) =>  {
                res.json({userId: user._id }).send();
            })
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
    },

    login: function (req, res) {

        const emailAddress = req.body.emailAddress;
        const password = req.body.password;

        db.User.findOne({email: emailAddress}, function (err, user) {

            if (user) {

                const passwordMatches = bcrypt.compareSync(password, user.password);

                if (!passwordMatches)
                {
                    res.status(401).send();
                }
                else
                {
                    res.json({userId: user._id }).send();
                }
            }
            else {
                res.status(401).send();
            }
        });
    },

    logout: function (req, res) {

    }, 

    

    /*
    // make the seerch case-insensitive
    db.User
    .findOne({username:{'$regex' : `^${req.params.username}$`, '$options' : 'i'}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    */
    }




// function setAuthentication(userId, res)
// {
//     // password matched, user has logged in
//     // set token expiry to seven days
//     const token = jwt.sign({id: userId}, process.env.JWT_SECRET, {expiresIn: '7d'});
//     res.cookie('token', token, {
//         expires: new Date(Date.now() + 604800) ,
//         secure: false,
//         httpOnly: true
//     });
// }
