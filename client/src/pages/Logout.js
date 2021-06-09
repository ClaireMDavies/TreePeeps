import { useEffect } from "react";

function Logout(props) {

    useEffect(() => {

        localStorage.removeItem("userId");
        props.history.push("/");

    }, []);

    return null;
};

export default Logout;