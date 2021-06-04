
const db = require('../config/connection.js');

const Project  = require("../models/Project.js");


db.once('open', async () => {
  await Project.deleteMany();

    const projectSeed = await Project.insertMany([
    {
        ownerid: 1, 
        title: "Help me build an Orchard",
        description: "I have 0.5 acre which is flat and well drained.  I would like to build a apple and pear orchard.",
        image:  "https://unsplash.com/@pavlenko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        latitude: 51.9044235,
        longitude: -2.2124234,
        hoursNeeded: 80,
        numTrees: 40,
        numContributors: 3, 
        ContributorNames: ["Dermot Bannon"],
        numStakes: 240,
        amtFertilizer: 80, 
        numSpirals: 100,
        timestamps:  new Date().setDate(new Date().getDate()-9)
    },
    {
        ownerid: 2, 
        title: "Community Centre celebrating 100 years ",
        description: "As part of our centenary celebrations, we should like to offer space for 10 x 6/8 Light Standard and one 10/12 Selected Standard trees  in the Centenary garden that we are constructing.",
        image:  "https://unsplash.com/@pavlenko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        latitude: 52.1333,
        longitude: -1.4,
        hoursNeeded: 80,
        numTrees: 40,
        numContributors: 3, 
        ContributorNames: ["Dermot Bannon, Robbie Bannon, Moira Hardy"],
        numStakes: 240,
        amtFertilizer: 80, 
        numSpirals: 100,
        timestamps:  new Date().setDate(new Date().getDate()-9)
    }
    ]);

//db.Project.deleteMany({})
 // .then(() => db.treepeeps.collection.insertMany(Project))
 // .then(data => {
 //   console.log(data.result.n + " records inserted!");
 //   process.exit(0);
 // })
 // .catch(err => {
 //   console.error(err);
 //   process.exit(1);
 // });
console.log('Projects seeded');

process.exit();
});
