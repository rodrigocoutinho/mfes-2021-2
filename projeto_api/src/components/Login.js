import React, { useState } from "react";
import api from "../services/api";

//Tela para realização do login
const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleLogin() {
        setError('');
        const data = {
            email: user,
            password: password
        }

        try {
            const response = await api.post('/login', data);
            sessionStorage.setItem("token", response.data.token);
            //alert(response.data.mensagem);
            setError(response.data.mensagem);
            setTimeout(function(){
                window.location.href = "http://localhost:3000/painel";
            }, 1000);
            
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
        <form onSubmit={onSubmit}>
            <h1>PLAUS</h1>
            <h3>Login</h3>
            <div className="form-group">
                <label>E-mail</label>
                <input required id="email" type="email" value={user} onChange={e => setUser(e.target.value)} className="form-control" placeholder="Enter email" />
            </div>
            <p />
            <div className="form-group">
                <label>Password</label>
                <input required id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
            </div>
            <p />
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember</label>
                </div>
                <p />
            </div>
            <button id="btn_entrar" name="btn_entrar" type="submit" onClick={handleLogin} className="btn btn-primary btn-block">Submit</button> &nbsp;&nbsp;&nbsp;

            <a href="/register">Register</a>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
            <div id="mensagem" name="mensagem" value={error} > {error !== '' && (<p style={{ color: "#ff0000" }}>{error}</p>)} </div>
            
        </form>
    );
}

export default Login;