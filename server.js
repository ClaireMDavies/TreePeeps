require("dotenv").config();
const db = require("./models")
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes")
const session = require("express-session");
const MongoStore = require("connect-mongo");
const PORT = process.env.PORT || 3001;
const app = express();


app.use(session({
  secret: 'SECRET KEY',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/sessions',
  })
}));



// Define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/treepeeps", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true

});

//testing connections
mongoose.connection.on('connected', () => console.log('Connected to MongoDB Endpoint'));
mongoose.connection.on('error', (err) => console.log(`Mongoose default connection error: ${err}`));


// Define API routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
