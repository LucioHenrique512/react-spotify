import React, { useEffect } from "react";
import Loading from "../../components/Loading";
import "./Authorize.scss";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../actions";
import { toNumber } from "lodash";

const Authorize = () => {
  const { hash } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (hash) {
      const authResponse = hash.split("&");
      const accessToken = authResponse[0].split("=")[1];
      const tokenType = authResponse[1].split("=")[1];
      const expiresIn = authResponse[2].split("=")[1];
      const state = authResponse[3].split("=")[1];

      const expirationTime = new Date();
      expirationTime.setSeconds(expirationTime.getSeconds() + 3600);

      dispatch(
        authActions.updateAuthState(
          accessToken,
          null,
          expirationTime.toString(),
          expiresIn,
          false,
          tokenType
        )
      );

      //onsole.log({ accessToken, tokenType, expiresIn, state });
    } else {
      history.push("/login#erro");
    }
  }, [hash]);
  return (
    <div className="callback" data-testid="callback">
      <Loading />
    </div>
  );
};

export default Authorize;
