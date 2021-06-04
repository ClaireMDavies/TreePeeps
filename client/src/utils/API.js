import axios from "axios";
<<<<<<< HEAD

export default {
    //get user
    getUser: function() {
        return axios.get("/api/user");
    }
};
=======
import env from "react-dotenv";

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const APIKEY = "&language=EN&key=" + env.API_KEY;

export default {
    // Converts city to Lat and Lng coordinates 
    convert: function (city) {
        return axios.get(BASEURL + city + APIKEY)
    },
    // Saves a project to the database
    saveProject: function (projectData) {
        return axios.post("/api/projects", projectData);
    },

};
>>>>>>> debb0890f7d5380a80fb51fc7b151af704425193
