import axios from "axios";
import env from "react-dotenv";

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const APIKEY = "&language=EN&key=" + env.API_KEY;

export default {
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  // Converts city to Lat and Lng coordinates 
  convert: function (city) {
    return axios.get(BASEURL + city + APIKEY)
  },
  //Saves a project to the database
  saveProject: function (projectData) {
    return axios.post("/api/projects", projectData);
  },
  getProjects: function () {
    return axios.get("/api/projects");
  },
  getProject: function (id) {
    return axios.get("/api/projects/project/" + id);
  },
  updateProject: function (id, data) {
    return axios.put("/api/projects/project/" + id, data);
  },
  searchByLocation: function (lat, lng, dist) {
    return axios.get(`/api/projects/location?lat=${lat}&lng=${lng}&dist=${dist}`);
  },
  saveContribution: function (ContributionData) {
    return axios.post("/api/contribution", ContributionData);
  },
  // check user for unique name
  doesUsernameExist: function (username) {
    return axios.head(`/api/users/${username}`);
  },
  getCountries: function () {
    return axios.get("https://countriesnow.space/api/v0.1/countries/info?returns=name");
  },
  getCitiesForCountry: function (country) {
    return axios.post("https://countriesnow.space/api/v0.1/countries/cities", { country: country });
  },
  createUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  login: function(emailAddress, password)
  {
    return axios.post("/api/users/login", { emailAddress: emailAddress, password: password });
  },
  logout: function()
  {

  }
};
