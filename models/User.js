const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
                description:'Enter a first name'
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
    imgUrl: {
               type: String, 
               required: false, 
               description: "Load an image - you, a tree or an Avatar!"
             },
    //main role whether they are contributing land/trees/other
    mainRole: {
              type: Array, 
              required: true
              },
    treeInterest: {
                type: Boolean, 
                required: false
                },
     
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
