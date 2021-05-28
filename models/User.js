const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    username: {
               type: String,
               require: true,
               trim: true, 
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
                require: true, 
                description: 'Enter a last name'
                 },
    email:    {
                type: email, 
                require: true, 
                description: "Please enter an email"
                },
    imgUrl: {
               type: String, 
               require: false, 
               description: "Load an image - you, a tree or an Avatar!"
             }
    //main role whether they are contributing land/trees/other
    mainRole: {
              type: Array, 
              require: true
              },
    treeInterest: {
                type: Boolean, 
                require: false
                }

    },
    { 
        timestamps: {
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
const Project = mongoose.model("Project", UserSchema);

module.exports = Project;
