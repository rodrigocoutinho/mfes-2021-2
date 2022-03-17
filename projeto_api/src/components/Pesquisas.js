import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import api from "../services/api";

//Dashboard onde serão exibidas as pesquisas
const Pesquisas = () => {
  const [pesquisas, setPesquisas] = useState([]);

  //consumindo os dados da api, para testar a comunicação entre back e front
  useEffect(() => {
    api
      .get("http://localhost:8080/api/pesquisas")
      .then((response) => setPesquisas(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <Link to="pesquisas/new" className="btn btn-primary">Nova Pesquisa</Link>
      <br />
      <hr />
      {pesquisas.length === 0 && (
        <p>Nenhuma pesquisa cadastrada</p>
      )}
      {pesquisas.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Questões</th>
              <th scope="col">Status</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {pesquisas.map(({ name, id, descricao, questoes, status }) => (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{descricao}</td>
                <td>{questoes.length}</td>
                <td>{status === 1 ? 'Finalizada' : 'Em andamento' }</td>
                <td>
                  <Link to={`pesquisas/${id}/edit`} className="btn btn-warning">Editar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

  );
}

export default Pesquisas;