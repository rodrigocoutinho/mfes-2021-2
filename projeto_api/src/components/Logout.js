import React, { useEffect } from "react";
import api from "../services/api";
import { useHistory } from "react-router-dom";

//Tela para realização do login
const Logout = () => {
    let history = useHistory();

    useEffect(() => {
        sessionStorage.removeItem("token");

        setTimeout(() => {
            window.location.href = "/login";
        }, 100);
    }, []);

    return (<div />);
}

export default Logout;