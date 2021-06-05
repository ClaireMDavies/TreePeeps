const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({

    userId: {
        type: String,
        //required:true
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    // image: {
    //     type: String,
    //     default: "https://unsplash.com/@pavlenko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    // },
    latitude: {
        type: String,
        required: false
    },
    longitude: {
        type: String,
        required: false
    },
    area: {
        type: Number,
        min: 0,
        required: false
    },
    landOwner : {
        type: String,
        required: false
    },
    hoursNeeded: {
        type: Number,
        min: 0,
        required: false
    },
    numTrees: {
        type: Number,
        min: 0,
        required: false
    },
    //likely to change to array?
    numContributors: {
        type: Number,
        required: false,
        min: 0
    },
    ContributorNames: {
        type: [String],
        required: false
    },
    numStakes: {
        type: Number,
        required: false
    },
    amtFertilizer: {
        type: Number,
        min: 0,
        required: false
    },
    numSpirals: {
        type: Number,
        required: false
    },
    status: {
        type: Boolean,
        default: true
    },
    otherResources: {
        type: String,
        required: false
    },
    timestamps: {
        type: Date
    }


});

//locAation - w3words - three word string - convert to l&l and vice versa - store both, no coversion
// latitude and longitude coords
// northings & eastings

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;


