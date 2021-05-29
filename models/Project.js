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
        type: String
    }
        required: true
    },
    image: {
        default: "https://unsplash.com/@pavlenko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    },
    //wip because Ben says is a good idea to store coords: northings and eastings AND
    // longitude and latitude
    shortLocation: {
        type: email,
        require: true
    },
    location: {
        type: String,
        require: true
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
    treeType: {
        type: String,
        require: false
    },
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


