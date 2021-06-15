require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const PORT = process.env.PORT || 3001;
const app = express();

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
