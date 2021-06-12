const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContributionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
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

module.exports = ContributionSchema;


