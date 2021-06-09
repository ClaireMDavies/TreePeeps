const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContributionSchema = new Schema({
    userId: {
        type: String,
    },
    time: {
        type: String,
    },
    land: {
        type: String,
    },
    resources: {
        type: String,
    },
    message: {
        type: Date,
    },
    timestamps: {
        type: Date
    }

});

const Contribution = mongoose.model("Contribution", ContributionSchema);

module.exports = Contribution;


