import React,{useEffect} from "react";
import { Authorize } from "../containers";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions, userActions } from "../actions";
import api from "../modules/api";
import endpoints from "../modules/endpoints";

const AuthorizeRoute = () => {
  const { hash } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { auth, user } = useSelector((state) => state);

  useEffect(() => {
    const getAuthData = () => {
      if (hash) {
        const authResponse = hash.split("&");
        const accessToken = authResponse[0].split("=")[1];
        const tokenType = authResponse[1].split("=")[1];
        const expiresIn = authResponse[2].split("=")[1];
        //const state = authResponse[3].split("=")[1];

        const expirationTime = new Date();
        expirationTime.setSeconds(expirationTime.getSeconds() + 3600);

        dispatch(
          authActions.updateAuthState({
            accessToken,
            expirationTime: expirationTime.toString(),
            expiresIn,
            tokenType,
          })
        );
        //onsole.log({ accessToken, tokenType, expiresIn, state });
      } else {
        history.push("/#erro");
      }
    };
    getAuthData();
  }, [hash, dispatch, history]);

  useEffect(() => {
    const getUserData = () => {
      if (auth.accessToken !== "") {
        api
          .get(endpoints.getUser, null, `${auth.tokenType} ${auth.accessToken}`)
          .then((response) => {
            const {
              display_name,
              email,
              product,
              images,
              error,
              external_urls,
            } = response;
            //console.log(response);
            if (display_name) {
              dispatch(
                userActions.updateUser({
                  email,
                  name: display_name,
                  status: product,
                  thumb: images[0]?.url,
                  userUrl: external_urls.spotify,
                })
              );
              dispatch(authActions.updateAuthState({ isLogged: true }));
              history.push("/dashboard");
            }
            if (error) {
              dispatch(
                authActions.updateAuthState({
                  isLogged: false,
                  erroMessage: error,
                  accessToken: "",
                  expirationTime: "",
                  expiresIn: "",
                  tokenType: "",
                })
              );
              history.push("/#error");
            }
          });
      }
    };
    if (!auth.isLogged || user.name === "") {
      getUserData();
    } else {
      history.push("/dashboard");
    }
  }, [user, auth, dispatch, history]);

  return <Authorize />;
};

export default AuthorizeRoute;
