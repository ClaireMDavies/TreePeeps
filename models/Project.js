const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contributionSchema = require("./Contribution");

const ProjectSchema = new Schema({

    owner: { 
        type: Schema.Types.ObjectId, 
        ref: 'User'
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
    location: {
        type: { type: String },
        coordinates: []
    },    
    latitude: {
        type: Number,
        required: false
    },
    longitude: {
        type: Number,
        required: false
    },
    area: {
        type: Number,
        min: 0,
        required: false
    },
    landOwner: {
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
    contributions : [contributionSchema],
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

}, {
    timestamps: true
});

//locAation - w3words - three word string - convert to l&l and vice versa - store both, no coversion
// latitude and longitude coords
// northings & eastings

ProjectSchema.index({ location: "2dsphere" });
const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;


