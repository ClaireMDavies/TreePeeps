import axios from "axios";
import env from "react-dotenv";

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const APIKEY = "&language=EN&key=" + env.API_KEY;

export default {
    //get user
    getUser: function() {
        return axios.get("/api/user");
    },

    // Converts city to Lat and Lng coordinates 
    convert: function (city) {
        return axios.get(BASEURL + city + APIKEY)
    },
    // Saves a project to the database
    saveProject: function (projectData) {
        return axios.post("/api/projects", projectData);
    },
    getProjects: function () {
        return axios.get("/api/projects");
    },

};
