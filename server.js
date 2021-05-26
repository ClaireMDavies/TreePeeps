const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");
// const routes = require("./routes")
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
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );

// Define API routes
// app.use(routes);

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
