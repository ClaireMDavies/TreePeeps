const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {type: String, require:true},
    firstname: {type: String, require:true},
    lastname: {type: String, require:true},
    email: {type: email, require:true},
    
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
