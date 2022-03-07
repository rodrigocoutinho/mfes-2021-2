import React, { useEffect, useState } from "react";
import api from "../services/api"

//Dashboard onde serão exibidas as pesquisas
const Painel = () => {
    const [user, setUser] = useState([]);

    //consumindo os dados da api, para testar a comunicação entre back e front
    useEffect(() => {
        api
            .get("http://localhost:8080/api/users")
            .then((response) => setUser(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <ul>
            {user.map(({ name, id }) => (
                <li key={id}>{name}</li>
            ))}
        </ul>
    );
}

export default Painel;