require("dotenv").config();
let mongoose = require("mongoose");
let db = require("../models/");

mongoose.connect(process.env.MONGODB_URI,  {
  useNewUrlParser: true,
  useFindAndModify: false, 
  useUnifiedTopology: true,
  useCreateIndex: true

});

mongoose.connection.on('connected', () => console.log('Connected to MongoDB Endpoint'));
mongoose.connection.on('error', (err) => console.log(`Mongoose default connection error: ${err}`));

let projectSeed = [
  {
    ownerid: 1 
    title: "Help me build an Orchard"
    description: "I have 0.5 acre which is flat and well drained.  I would like to build a apple and pear orchard."
    image:  "https://unsplash.com/@pavlenko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    latitude: 51.9044235
    longitude: -2.2124234
    hoursNeeded: 80
    numTrees: 40
    numContributors: 3 
    ContributorNames: ["Dermot Bannon, Robbie Bannon, Moira Hardy"]
    numStakes: 240
    amtFertilizer: 80 
    numSpirals: 100
    timestamps:  new Date().setDate(new Date().getDate()-9)
  },
  {
    ownerid: 1 
    title: "Help me build an Orchard"
    description: "I have 0.5 acre which is flat and well drained.  I would like to build a apple and pear orchard."
    image:  "https://unsplash.com/@pavlenko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    latitude: 51.9044235
    longitude: -2.2124234
    hoursNeeded: 80
    numTrees: 40
    numContributors: 3 
    ContributorNames: ["Dermot Bannon, Robbie Bannon, Moira Hardy"]
    numStakes: 240
    amtFertilizer: 80 
    numSpirals: 100
    timestamps:  new Date().setDate(new Date().getDate()-9)
  }
 
];

db.Project.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutProject))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
