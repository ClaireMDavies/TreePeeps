const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
<<<<<<< HEAD
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({

  username: {
    type: String,
    required: true,
    trim: true,
    required: true,
    unique: true,
    minlength: 6,
    description: "Your username should be a minimum of 6 characters"
  },
  firstname: {
    type: String,
    trim: true,
    description: 'Enter a first name'
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
    description: 'Enter a last name'
  },
  email: {
    type: String,
    required: true,
    description: "Please enter an email"
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    required: false
  },
  longitude: {
    type: String,
    required: false
  },
  timestamps: {
    type: Date
  }
});
=======
const env = require("dotenv").config();
const axios = require("axios");

const UserSchema = new Schema({

    username: {
               type: String,
               required: true,
               trim: true, 
               unique: true, 
               minlength: 6,
               description: "Your username should be a minimum of 6 characters"
               },
    firstname: {
                type: String,
                trim: true,
                description: 'Enter a first name'
    },
    lastname: {
                type: String, 
                trim: true, 
                required: true, 
                description: 'Enter a last name'
              },
    email:    {
                type: String, 
                required: true, 
                description: "Please enter an email"
                },
    password: {
                type: String,
                required: true,
                minlength: 8
              },
    country: {
              type: String,
              required: true
              },
    city: {
              type: String,
              required: true
    },
    latitude: {
              type: String,
              required: false
    },
    longitude: {
              type: String,
              required: false
    },
    timestamps: {
            type: Date
        } 
   });
>>>>>>> f99b8b7f98cc54bb3898891e35719f6f24acb237

UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }

  const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  const APIKEY = "&language=EN&key=" + process.env.GOOGLE_API_KEY;

  // get location
  const response = await axios.get(BASEURL + this.city + APIKEY);
  this.latitude = response.data.results[0].geometry.location.lat.toString();
  this.longitude = response.data.results[0].geometry.location.lng.toString();

  next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
<<<<<<< HEAD
=======

    // Provision for number of projects created to present
>>>>>>> f99b8b7f98cc54bb3898891e35719f6f24acb237

// Provision for number of projects created to present

//imgUrl: {
//           type: String, 
//           required: false, 
//           description: "Load an image - you, a tree or an Avatar!"
//        },

const token = jwt.sign({ id: newUser.id }, config.jwt.secret, { expiresIn: '24h' });

res.json({
  token,
  user: {
    id: newUser.id,
    username: newUser.username,
  },
});


//left in here because believe will be calculation
// virtual to add the total duration of excercises and add to a new field called totalDuration
//WorkoutSchema.virtual("totalDuration").get(function () {
//    return this.exercises.reduce((ttl, exc) => {
//        return ttl + exc.duration
//    }, 0);
//});

//the model will be named User
const User = mongoose.model("User", UserSchema);

module.exports = User;
