import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Painel from './components/Painel';
import Logout from './components/Logout';
import Pesquisas from './components/Pesquisas';
import FormPesquisa from './components/FormPesquisa';
import api from './services/api';

const authToken = sessionStorage.getItem("token");
api.defaults.headers.Authorization = `Bearer ${authToken}`;

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/login"}>Plataforma de Avaliação de Usabilidade de Software</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              {!authToken ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/register"}>Sign up</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/painel"}>Painel</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/pesquisas"}>Pesquisas</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/logout"}>Sair</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/">
              {authToken ? <Redirect to="/painel" /> : <Redirect to="/login" />}
            </Route>
            {!authToken ? (
              <>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </>
            ) : (
              <>
                <Route exact path="/painel" component={Painel} />
                <Route exact path="/pesquisas" component={Pesquisas} />
                <Route exact path="/pesquisas/new" component={FormPesquisa} />
                <Route exact path="/pesquisas/:id/edit" component={FormPesquisa} />
                <Route exact path="/logout" component={Logout} />
              </>
            )}
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;