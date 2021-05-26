const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    id: {type: String, require:true},
    Ownerid: {type: String, require:true},
    title: {type: String, require:true},
    shortlocation: {type: email, require:true},
    location: {type: String, require:true}, 
    hoursneeded: {type: Number, require:false},
    numtrees: {type: Number, require:false},
    treetype: {type: String, require:false}, 
    numstakes: {type: Number, require:false},
    amtfertilizer: {type: Number, require:false}, 
    numspirals: {type: Number, require:false},   

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




id: {type: String, require: true},
title: { type: String, require: true},
authors: [{ type: String, require: true}],
description: { type: String, require: true},
image: { type: String, unique: true, dropDups: true},
link: { type: String, required: true}
