const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContributionSchema = new Schema({
    userId: {
        type: String,
    },
    time: {
        type: Boolean,
    },
    land: {
        type: Boolean,
    },
    resources: {
        type: Boolean,
    },
    message: {
        type: String,
    },
    timestamps: {
        type: Date
    }

});

const Contribution = mongoose.model("Contribution", ContributionSchema);

module.exports = Contribution;


