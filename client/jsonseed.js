const { User } = require('../models');
const { Project } = require('../models');

const userData = [
    {
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
    }, 
   
        username: 'HarryR',
        firstname: 'Harry',
        lastname: 'Rodgers',
        email: 'harry@email.com',
        password: 'Pass1234',
        country: 'UK',
        city: 'Birmingham',
        latitude: 52.43862848771243,
        longitude: -2.134756486816054,
        timestamps: new Date().setDate(new Date().getDate() - 9)
];


const projectData = [
    {
        owner: SilverT._id,
        name: "Stonehouse Gang  ",
        title: "Help us to help The Gables",
        description: "We are a Youth Club that is building a garden for the Gables Nursing Home.  Could you please contribute 4 different pretty small-medium trees for us to add to our garden.  Something nice to look at that will attract birds would be perfect. ",
        startDate: new Date(),
        endDate: new Date().setDate(new Date().getDate() + 30),
        location: {
            type: "Point",
            coordinates: [-2.1172434423933897, 52.42480412578006]
        },
        latitude: 52.42480412578006,
        longitude: -2.1172434423933897,
        area: 20,
        landOwner: "The Gables Limited",
        hoursNeeded: 2,
        numTrees: 4,
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
    
    },

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
        contributions: [
            {   
                user: claireUser._id,
                time: true,
                land: true,
                resources: true,
                message: 'My Duke of Edinburgh team would like to help!',
                timestamps: new Date().setDate(new Date().getDate() - 9)
            }
        ],
        numStakes: 240,
        amtFertilizer: 80,
        numSpirals: 100,
        status: true,
        otherResources: "n/a",
        timestamps: new Date().setDate(new Date().getDate() - 9),
    
    },
];

const seedProducts = () => User.bulkCreate(userData);

module.exports = seedProducts;