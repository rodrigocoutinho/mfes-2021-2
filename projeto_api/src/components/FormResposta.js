import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from 'bootstrap';
import api from "../services/api";

//Formulário de registro/edição de pesquisas
export default function FormResposta() {
  const params = useParams();
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tcle, setTcle] = useState('');
  const [status, setStatus] = useState(0);
  const [questoes, setQuestoes] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [error, setError] = useState('');

  console.log("RESPOSTAS", respostas)

  useEffect(() => {
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

        setRespostas(data.questoes.map(questao => ({
          questao_id: questao.id, 
          resposta: "",
        })));

      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function setRespostaValue(questao_id, value) {
    const respostas_copy = [...respostas];
    for (let i = 0; i < respostas_copy.length; i+= 1) {
      if (respostas_copy[i].questao_id == questao_id) {
        respostas_copy[i].resposta = value;
      }
    }
    setRespostas(respostas_copy);
  }

  function is_valid_form() {
    for (let i = 0; i < respostas.length; i+= 1) {
      if (respostas[i].resposta == "") {
        return false;
      }
    }
    return true;
  }

  //Função que define os dados do formuário e envia os dados para o backend
  async function handleSubmit(e) {
    e.preventDefault();

    setError('');

    if (!is_valid_form()) {
      setError("Preencha todas as perguntas");
      return;
    }

    const data = { respostas };

    try {
      let response = null;
      response = await api.post(`/pesquisas/disponiveis/${id}`, data);
      alert(`Resposta cadastrada com sucesso!`);
      window.location.href = '/painel';
    } catch (error) {
      const { mensagem } = error.response.data;
      setError(mensagem);
      alert(mensagem);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Respondendo Pesquisa</h3>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            readOnly
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Nome da pesquisa"
            value={name}
          />

        </div>

        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <input
            readOnly
            id="descricao"
            name="descricao"
            type="text"
            className="form-control"
            placeholder="Descrição da Pesquisa"
            value={descricao}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">TCLE</label>
          <textarea
            readOnly
            id="tcle"
            name="tcle"
            type="text"
            className="form-control"
            rows="5"
            value={tcle}></textarea>
        </div>

        <hr />
        <h4 className="mt-4">Questões</h4>

        {questoes.length === 0 && (
          <p>Nenhuma questão cadastrada</p>
        )}

        {questoes.length > 0 && (
          <>
            {questoes.map(({ pergunta, id }, index) => (
              <div key={String(id)} className="mb-3">
                <label htmlFor={pergunta} className="form-label">{pergunta}</label>
                <input
                  required
                  name={pergunta}
                  type="text"
                  className="form-control"
                  placeholder="Digite a sua resposta"
                  value={respostas[index] ? respostas[index].resposta : ""}
                  onChange={e => setRespostaValue(id, e.target.value)}
                />
              </div>
            ))}

            <button type="submit" className="btn btn-primary btn-block">Salvar</button>
            {error && <p id="mensagem_pesquisa" value={error} style={{ color: "#ff0000" }}>{error}</p>}
          </>
        )}
      </form>
    </>
  );
} 