import React, { useState } from "react";
import api from "../services/api";

//Formulário de registro para cadastro
export default function Register() {

    const [name, setName] = useState('');
    const [fone, setFone] = useState('');
    const [tipo, setTipo] = useState('Usuario');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    //Função que define os dados do formuário e envia os dados para o backend
    async function handleSubmit() {
        const data = {
            name: name,
            fone: fone,
            tipo: tipo,
            email: email,
            password: password
        }

        //console.log(data)

        try {
            //Envio dos dados para api
            const response = await api.post('http://localhost:8080/api/register', data);

            //alert(response.data.mensagem);
            //Limpa os dados do formulário
            setName('');
            setFone('');
            setTipo('');
            setEmail('');
            setPassword('');

            setError(response.data.mensagem);

            // envia para pagina de login
            window.location.href = '/login'
        } catch (error) {
            const { mensagem } = error.response.data;
            setError(mensagem);
            //alert(mensagem);
        }
    }

    function onSubmit(ev) {
        ev.preventDefault();
    }


    return (
        <form onSubmit={onSubmit} >
            <h3 id="title3">Register</h3>
            <div className="form-group">
                <label>Full name</label>
                <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

            </div>
            <p />

            <div className="form-group">
                <label>Fone</label>
                <input
                    required
                    id="fone"
                    name="fone"
                    type="text"
                    className="form-control"
                    placeholder="Telefone"
                    value={fone}
                    onChange={e => setFone(e.target.value)}
                />
                <p />

                <div className="form-group">
                    <label>Tipo de Usuario</label>
                    <select name="tipo" id="tipo "value={tipo} onChange={e => setTipo(e.target.value)} >
                        <option value="Usuario" >Usuario</option>
                        <option value="Engenheiro de Software">Engenheiro de Software</option>
                    </select>
                </div>

            </div>
            <p />

            <div className="form-group">
                <label>Email address</label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <p />
            <button
                id="signup"
                name="signup"
                type="submit"
                className="btn btn-primary btn-block"
                onClick={handleSubmit}>
                Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/login">sign in?</a>
            </p>
            <div  >{error !== '' && (<p id="mensagem" name="mensagem" value={error}style={{ color: "#ff0000" }}>{error}</p>)}</div>
            
        </form>
    );
}