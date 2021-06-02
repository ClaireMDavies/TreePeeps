const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({

    Ownerid: {
        type: String,
        //required:true
    },
    title: {
        type: String,
        required:true
        },
    description: {
        type: String,
        required: true
    },
    image: {
        default: "https://unsplash.com/@pavlenko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    },
    latitude: {
        type: String,
        require: false
    },
    longitude: {
        type: String,
        require: false
    },
    hoursNeeded: {
        type: Number,
        min: 0,
        require: false
    },
    numTrees: {
        type: Number,
        min: 0,
        require: false
    },
    //likely to change to array?
    numContributors: {
        type: Number,
        require: false,
        min: 0
    },
    ContributorNames: {
        type: String,
        require: false
    }
    numStakes: {
        type: Number,
        require: false
    },
    amtFertilizer: {
        type: Number,
        min: 0,
        require: false
    },
    numSpirals: {
        type: Number,
        require: false
    },
    timestamps: {
        type: Date
    }


});

//locAation - w3words - three word string - convert to l&l and vice versa - store both, no coversion
// latitude and longitude coords
// northings & eastings

const Project = mongoose.model("Project", UserSchema);

module.exports = Project;


