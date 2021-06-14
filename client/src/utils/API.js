import axios from "axios";
import env from "react-dotenv";

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const APIKEY = "&language=EN&key=" + env.API_KEY;

export default {
  // Users routes
  // Checks user for unique name
  doesUsernameExist: function (username) {
    return axios.head(`/api/users/${username}`);
  },
  // Saves new user in db
  createUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  // Checks the logins
  login: function (emailAddress, password) {
    return axios.post("/api/users/login", { emailAddress: emailAddress, password: password });
  },

  // Third party APIs
  // Gets countries in the signup form
  getCountries: function () {
    return axios.get("https://countriesnow.space/api/v0.1/countries/info?returns=name");
  },
  // Gets cities in the signup form
  getCitiesForCountry: function (country) {
    return axios.post("https://countriesnow.space/api/v0.1/countries/cities", { country: country });
  },
  // Converts city to Lat and Lng coordinates 
  convert: function (city) {
    return axios.get(BASEURL + city + APIKEY)
  },

  // Projects routes
  //Saves a project to the database
  saveProject: function (projectData) {
    return axios.post("/api/projects", projectData);
  },
  // Gets projects from db
  getProjects: function () {
    return axios.get("/api/projects");
  },
  // Gets projects from db by userId
  getProjectsForUser: function (userId) {
    return axios.get("/api/projects/user/" + userId);
  },
  // Gets contributed projects from db by userId
  getContributedProjectsForUser: function (userId) {
    return axios.get("/api/projects/usercontributed/" + userId);
  },
  // Gets project status from db and updates it
  setProjectStatus: function (id, status) {
    return axios.put("/api/projects/status/" + id, { status: status });
  },
  // Adds contribution to the project
  addProjectContribution: function (id, contribution) {
    return axios.put("/api/projects/contributions/" + id, contribution);
  },
  // Deletes the projects
  deleteProject: function (id) {
    return axios.delete("/api/projects/" + id);
  },
  // Search by location
  searchByLocation: function (lat, lng, dist) {
    return axios.get(`/api/projects/location/${lat}/${lng}/${dist}`);
  },
};
