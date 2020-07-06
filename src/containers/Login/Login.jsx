import React from "react";
import Logo from "../../components/Logo";
import "./Login.scss";
import { config } from "../../config";
import { useLocation } from "react-router-dom";
import { randomString } from "../../modules/utils";

const Login = () => {
  const { spotify } = config;
  const { hash } = useLocation();

  const authUrl = `${spotify.authorizationURL}?client_id=${
    spotify.clientId
  }&response_type=token&redirect_uri=${
    spotify.redirectUrl
  }&scope=${spotify.scopes
    .toString()
    .replace(/(,)/gi, " ")}&state=${randomString(15)}`;

  //console.log(hash);

  return (
    <main className="login" data-testid="login">
      <div className="container">
        <Logo className=".spotify-brand" />
        <div className="login__microcopy">
          Não toca a musica inteira<strong> más toca o seu coração</strong>
        </div>
        <a href={authUrl} className="login__auth-button">
          Entrar com spotify
        </a>
        {hash.includes("erro") ? (
          <span className="login__erromessage">
            Algo deu errado com seu login, favor tente novamente. 
          </span>
        ) : null}
      </div>
    </main>
  );
};

export default Login;
