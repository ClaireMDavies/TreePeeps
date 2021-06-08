import axios from "axios";
import env from "react-dotenv";

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const APIKEY = "&language=EN&key=" + env.API_KEY;

export default {
  //get user
  getUser: function () {
    return axios.get("/api/users");
  },
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
    return axios.get("/api/projects " + id);
  },
  searchByLocation: function (lat) {
    // return axios.get(`/api/projects/location?lat=${lat}+lng=${lng}`);
    // return axios.get(`/api/projects/location/lat=${lat}`);
    return axios.get(`/api/projects/location`);

  },
  // check user for unique name
  doesUsernameExist: function (username) {
    return fetch(`/api/users/${username}`, { method: 'HEAD' })
      .then((response) => {
        return response.ok;
      });
  },
  getCountries: function () {
    return fetch("https://countriesnow.space/api/v0.1/countries/info?returns=name");
  },
  getCitiesForCountry: function (country) {
    return fetch("https://countriesnow.space/api/v0.1/countries/cities", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ country: country })
    });
  },
  createUser: function (userData) {
    return axios.post("/api/users", userData);
  }
};
