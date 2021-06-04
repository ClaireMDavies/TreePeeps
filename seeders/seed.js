
const db = require('../config/connection.js');

const Project  = require("../models/Project.js");
const User =  require("../models/User.js");


db.once('open', async () => {
  await Project.deleteMany();
   await User.deleteMany();

    const projectSeed = await Project.insertMany([
    {
        ownerid: 1, 
        title: "Help me build an Orchard",
        name: "Hagley Orchard",
        description: "I have 0.5 acre area which is flat and well drained.  I would like to build a apple and pear orchard.",
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
        status: true,
        timestamps:  new Date().setDate(new Date().getDate()-9)
    },
    {
        ownerid: 2, 
        name: "Centenary Trees",
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
        status: true,
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

  const user1 = await User.create({
    username: 'Treeguy',  
    firstname: 'Bill',
    lastname: 'Gates',
    email: 'bill@test.com',
    password: 'password12345',
    country: 'UK',
    city: 'Hagley',
    longitude: 52.42787,
    latitude: -2.12685,
    timestamp: new Date().setDate(new Date().getDate()-9)
  });

  const user2 = await User.create({
    username: 'Swampie',  
    firstname: 'Wurzel',
    lastname: 'Gates',
    email: 'wurzel@test.com',
    password: 'password12345',
    country: 'UK',
    city: 'Birmingham',
    longitude: 52.47047,
    latitude: -1.96454,
    timestamp: new Date().setDate(new Date().getDate()-9)
  });

  const user3 = await User.create({
    username: 'Mick24',  
    firstname: 'Mickey',
    lastname: 'Mouse',
    email: 'mickey@test.com',
    password: 'password12345',
    country: 'UK',
    city: 'Birmingham',
    longitude: 52.47047,
    latitude: -1.96454,
    timestamp: new Date().setDate(new Date().getDate()-9)
  });

  console.log('Users seeded');

process.exit();
});
