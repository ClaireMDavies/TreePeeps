const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({

    username: {
               type: String,
               required: true,
               trim: true, 
               required: true, 
               unique: true, 
               minlength: 8,
               description: "Your username should be a minimum of 8 characters"
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
                type: email, 
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
    }
    {
    hooks: {
      beforeCreate: async (newUser) => {
        newUser.password = await bcrypt.hash(newUser.password, 8);
        return newUser;
      },
      beforeUpdate: async (updatedUser) => {
        updatedUser.password = await bcrypt.hash(updatedUser.password, 8);
        return updatedUser;
      },
    },
    // Provision for number of projects created to present

    //imgUrl: {
    //           type: String, 
    //           required: false, 
    //           description: "Load an image - you, a tree or an Avatar!"
     //        },
    
     
    timestamp: {
            type: Date
        } 
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
