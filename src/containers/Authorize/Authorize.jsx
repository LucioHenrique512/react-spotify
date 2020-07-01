import React, { useEffect } from "react";
import Loading from "../../components/Loading";
import "./Authorize.scss";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions, userActions } from "../../actions";
import api from "../../modules/api";

const Authorize = () => {
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
        history.push("/login#erro");
      }
    };
    getAuthData();
  }, [hash, dispatch]);

  useEffect(() => {
    const getUserData = () => {
      if (auth.accessToken !== "") {
        api.get("/me").then((response) => {
          const { display_name, email, product, images, error } = response;

          if (display_name) {
            dispatch(
              userActions.updateUser({
                email,
                name: display_name,
                status: product,
                thumb: images[0].url,
              })
            );
            dispatch(authActions.updateAuthState({ isLogged: true }));
            history.push("/");
          }
          if (error) {
            dispatch(
              authActions.updateAuthState({
                isLogged: false,
                erroMessage: error,
              })
            );
            history.push("/login#error");
          }
        });
      }
    };
    if (user.status === "") getUserData();
  }, [user, auth, dispatch]);

  return (
    <div className="callback" data-testid="callback">
      <Loading />
    </div>
  );
};

export default Authorize;
