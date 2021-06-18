const db = require('../config/connection.js');

const Project = require("../models/Project.js");
const User = require("../models/User.js");
const Contribution = require("../models/Contribution.js");

db.once('open', async () => {
    await User.deleteMany();
    await Project.deleteMany();

    const claireUser = await User.create({
        username: 'ClaireD',
        firstname: 'Claire',
        lastname: 'Davies',
        email: 'claire@email.com',
        password: 'Password12345',
        country: 'UK',
        city: 'Redditch',
        latitude: 52.292611432931295,
        longitude: -1.96054745742439,
        timestamps: new Date().setDate(new Date().getDate() - 9)
    });

    const sallyUser = await User.create({
        username: 'sallyxp',
        firstname: 'Sally',
        lastname: 'Rodgers',
        email: 'sally@email.com',
        password: 'Password12345',
        country: 'UK',
        city: 'Hagley',
        latitude: 52.43862848771243,
        longitude: -2.134756486816054,
        timestamps: new Date().setDate(new Date().getDate() - 9)
    });

    const JackSilverUser = await User.create({
        
            username: 'SilverT',
            firstname: 'John',
            lastname: 'Silver',
            email: 'silverjack@email.com',
            password: 'Pass1234',
            country: 'UK',
            city: 'Redditch',
            latitude: -1.96054745742439,
            longitude: 52.292611432931295,
            timestamps: new Date().setDate(new Date().getDate() - 9)
        
    });

    console.log('Users seeded');

    const hagleyOrchardProject = await Project.create(
        {
            owner: sallyUser._id,
            name: "Hagley Orchard",
            title: "Help me build an Orchard",
            description: "I have 0.5 acre area which is flat and well drained.  I would like to build a apple and pear orchard.",
            startDate: new Date(),
            endDate: new Date().setDate(new Date().getDate() + 30),
            location: {
                type: "Point",
                coordinates: [-2.1172434423933897, 52.42480412578006]
            },
            latitude: 52.42480412578006,
            longitude: -2.1172434423933897,
            area: 120,
            landOwner: "Hagley Estates",
            hoursNeeded: 80,
            numTrees: 40,
            contributions: [
                {   
                    user: claireUser._id,
                    time: true,
                    land: true,
                    resources: true,
                    message: 'Happy to help!',
                    timestamps: new Date().setDate(new Date().getDate() - 9)
                }
            ],
            numStakes: 240,
            amtFertilizer: 80,
            numSpirals: 100,
            status: true,
            otherResources: "n/a",
            timestamps: new Date().setDate(new Date().getDate() - 9),
        }
    );

    const headlessCrossGreenProject = await Project.create(
        {
            owner: claireUser._id,
            name: "Headless Cross Green",
            title: "Help me build a community garden",
            description: "I have 2 acre area which is flat and well drained.  I would like to build a apple and pear orchard.",
            startDate: new Date(),
            endDate: new Date().setDate(new Date().getDate() + 60),
            location: {
                type: "Point",
                coordinates: [-1.9466807045245513, 52.29261019147486]
            },
            latitude: 52.29261019147486,
            longitude: -1.9466807045245513,
            area: 240,
            landOwner: "Redditch Borough Council",
            hoursNeeded: 180,
            numTrees: 20,
            contributions: [
                {   
                    user: sallyUser._id,
                    time: true,
                    land: true,
                    resources: true,
                    message: 'Happy to help!',
                    timestamps: new Date().setDate(new Date().getDate() - 9)
                }
            ],
            numStakes: 140,
            amtFertilizer: 10,
            numSpirals: 20,
            status: true,
            otherResources: "n/a",
            timestamps: new Date().setDate(new Date().getDate() - 9),
        }
    );

    const bromsgroveSandersParkProject = await Project.create(
        {
            owner: claireUser._id,
            name: "Sanders Park",
            title: "Help me build a family woodland",
            description: "The park has 4 acres available.",
            startDate: new Date(),
            endDate: new Date().setDate(new Date().getDate() + 120),
            location: {
                type: "Point",
                coordinates: [-2.072766835989432, 52.33443991203399]
            },
            latitude: 52.33443991203399,
            longitude: -2.072766835989432,
            area: 240,
            landOwner: "Bromsgrove District Council",
            hoursNeeded: 45,
            numTrees: 160,
            contributions: [],
            numStakes: 140,
            amtFertilizer: 10,
            numSpirals: 20,
            status: true,
            otherResources: "n/a",
            timestamps: new Date().setDate(new Date().getDate() - 9),
        }
    );

    const suttonParkProject = await Project.create(
        {
            owner: claireUser._id,
            name: "Sutton Park",
            title: "Help me build a family woodland",
            description: "The park has 24 acres available.",
            startDate: new Date(),
            endDate: new Date().setDate(new Date().getDate() + 120),
            location: {
                type: "Point",
                coordinates: [-1.8569798837185685, 52.574877055486695]
            },
            latitude: 52.574877055486695,
            longitude: -1.8569798837185685,
            area: 240,
            landOwner: "Sutton Council",
            hoursNeeded: 45,
            numTrees: 425,
            contributions: [],
            numStakes: 140,
            amtFertilizer: 10,
            numSpirals: 20,
            status: true,
            otherResources: "hazel rods to hold stakes together",
            timestamps: new Date().setDate(new Date().getDate() - 9),
        }
    );

    const MemoryGardenProject = await Project.create(
        {
            owner: sallyUser._id,
            name: "Queens Park",
            title: "Help us build a Memory Garden",
            description: "We should like to build a memory garden to commemorate those who have lost their lives during the pandemic, regardless of their cause of death.",
            startDate: new Date(),
            endDate: new Date().setDate(new Date().getDate() + 120),
            location: {
                type: "Point",
                coordinates: [-1.8569798837185685, 52.574877055486695]
            },
            latitude: 52.574877055486695,
            longitude: -1.8569798837185685,
            area: 240,
            landOwner: "Birmingham City Council",
            hoursNeeded: 30,
            numTrees: 12,
            contributions: [],
            numStakes: 50,
            amtFertilizer: 20,
            numSpirals: 25,
            status: true,
            otherResources: "hazel rods to hold stakes together & benches if you have them, old or new.",
            timestamps: new Date().setDate(new Date().getDate() - 9),
        }
    )

    const heartOfEnglandForestProject = await Project.create(
        {
            owner: claireUser._id,
            name: "Heart of England Forest",
            title: "Help us expand this forest",
            description: "The forest park has over 500 acres.  We need people to help clear scrub, move saplings to better locations, help with maintenance.  ",
            startDate: new Date(),
            endDate: new Date().setDate(new Date().getDate() + 120),
            location: {
                type: "Point",
                coordinates: [-1.8726577983084436, 52.256894793198775]
            },
            latitude: 52.256894793198775,
            longitude: -1.8726577983084436,
            area: 240,
            landOwner: "Heart of England Forest Project",
            hoursNeeded: 45,
            numTrees: 2225,
            contributions: [],
            numStakes: 140,
            amtFertilizer: 10,
            numSpirals: 20,
            status: true,
            otherResources: "n/a",
            timestamps: new Date().setDate(new Date().getDate() - 9),
        }
    );

    console.log('Projects seeded');

    process.exit();
});
