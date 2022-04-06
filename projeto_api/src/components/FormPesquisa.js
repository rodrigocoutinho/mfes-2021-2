import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from 'bootstrap';
import api from "../services/api";

//Formulário de registro/edição de pesquisas
export default function FormPesquisa() {
  const params = useParams();
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tcle, setTcle] = useState('');
  const [status, setStatus] = useState(0);
  const [questoes, setQuestoes] = useState([]);
  const [questaoId, setQuestaoId] = useState(null);
  const [pergunta, setPergunta] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.id) {
      setId(params.id);

      api
        .get(`/pesquisas/${params.id}`)
        .then((response) => {
          const { data } = response;
          setName(data.name);
          setDescricao(data.descricao);
          setTcle(data.tcle);
          setStatus(data.status);
          setQuestoes(data.questoes);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }
  }, []);

  //Função que define os dados do formuário e envia os dados para o backend
  async function handleSubmit(e) {
    e.preventDefault();

    setError('');

    const data = { name, descricao, tcle, status };

    try {
      let response = null;
      if (id) {
        response = await api.post(`/pesquisas/${id}`, data);
      } else {
        response = await api.post(`/pesquisas`, data);
      }
      alert(`Pesquisa ${id ? 'alterada' : 'cadastrada'} com sucesso!`);
      window.location.href = '/pesquisas';
    } catch (error) {
      const { mensagem } = error.response.data;
      setError(mensagem);
      alert(mensagem);
    }
  }

  function openModal(idPergunta = null, textoPergunta = '') {
    setQuestaoId(idPergunta);
    setPergunta(textoPergunta);
    const modal = new Modal(document.getElementById('pesquisas_edit_modal'));
    modal.show();
  }

  //Função que define os dados do modal e envia pro backend
  async function handleModalSubmit(e) {
    e.preventDefault();

    setError('');

    const data = { pergunta: pergunta, id: questaoId };

    try {
      let response = await api.post(`/pesquisas/${id}/perguntas`, data);

      alert(`Pergunta ${questaoId ? 'alterada' : 'cadastrada'} com sucesso!`);
      window.location.href = `/pesquisas/${id}/edit`;
    } catch (error) {
      console.log(error);
      const { mensagem } = error.response.data;
      alert(mensagem);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>{id ? 'Editar' : 'Cadastrar'} Pesquisa</h3>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            required
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Nome da pesquisa"
            value={name}
            onChange={e => setName(e.target.value)}
          />

        </div>

        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <input
            required
            id="descricao"
            name="descricao"
            type="text"
            className="form-control"
            placeholder="Descrição da Pesquisa"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">TCLE</label>
          <textarea
            required
            id="tcle"
            name="tcle"
            type="text"
            className="form-control"
            rows="5"
            value={tcle}
            onChange={e => setTcle(e.target.value)}></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Status da Pesquisa</label>
          <select id="status" value={status} onChange={e => setStatus(e.target.value)} className="form-select" >
            <option value="0">Em andamento</option>
            <option value="1">Finalizada</option>
          </select>
        </div>

        <div className="mb-3">
          <button id="btn_salvar_pesquisa" type="submit" className="btn btn-primary btn-block">Salvar</button>
        </div>

        {error && <p id="mensagem_pesquisa" value={error} style={{ color: "#ff0000" }}>{error}</p>}

        {id && (
          <>
            <hr />
            <h4 className="mt-4">Questões</h4>

            <button type="button" className="btn btn-primary mb-3 mt-3" onClick={() => openModal(null, '')}>Nova Questão</button>

            {questoes.length === 0 && (
              <p>Nenhuma questão cadastrada</p>
            )}

            {questoes.length > 0 && (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Questão</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {questoes.map(({ pergunta, id }) => (
                    <tr key={id}>
                      <th scope="row">{id}</th>
                      <td>{pergunta}</td>
                      <td>
                        <button type="button" className="btn btn-warning" onClick={() => openModal(id, pergunta)}>Editar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </form>

      <div className="modal" tabIndex="-1" id="pesquisas_edit_modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{questaoId ? 'Editar' : 'Cadastrar'} Pergunta</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleModalSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Pergunta</label>
                  <input
                    required
                    id="pergunta"
                    name="pergunta"
                    type="text"
                    className="form-control"
                    placeholder="Pergunta da questão"
                    value={pergunta}
                    onChange={e => setPergunta(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button id="btn_salvar_pergunta" type="submit" className="btn btn-primary">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}