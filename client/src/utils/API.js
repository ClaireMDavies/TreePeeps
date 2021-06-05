import axios from "axios";
import env from "react-dotenv";

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const APIKEY = "&language=EN&key=" + env.API_KEY;

export default {
    //get user
    //getUser: function() {
    //    return axios.get("/api/users");
    //},
    getUsers: function() {
        return axios.get("/api/users");
      },
      // Gets the user with the given id
      getUser: function(id) {
        return axios.get("/api/users/" + id);
      },
      // Deletes the user with the given id
      deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
      },
      // Saves a user to the database
      saveUser: function(userData) {
        return axios.post("/api/users", userData);
      },
    // Converts city to Lat and Lng coordinates 
    convert: function (city) {
        return axios.get(BASEURL + city + APIKEY)
    },
    // Saves a project to the database
  //  saveProject: function (projectData) {
   //     return axios.post("/api/projects", projectData);
   // },
     // Gets all projects
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the project with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a project to the database
  saveBook: function(projectData) {
    return axios.post("/api/projects", projectData);
  }
};
