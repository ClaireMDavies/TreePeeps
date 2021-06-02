import axios from "axios";

export default {
    //get user
    getUser: function() {
        return axios.get("/api/user");
    }
};