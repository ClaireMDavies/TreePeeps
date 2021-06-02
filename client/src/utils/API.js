import axios from "axios";
import env from "react-dotenv";

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const APIKEY = "&language=EN&key=" + env.API_KEY;

export default {
    convert: function (city) {
        return axios.get(BASEURL + city + APIKEY)
       
    },

};
