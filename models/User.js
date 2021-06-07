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

UserSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }

  next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};
    
    // Provision for number of projects created to present

    //imgUrl: {
    //           type: String, 
    //           required: false, 
    //           description: "Load an image - you, a tree or an Avatar!"
     //        },
    
     
  

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
