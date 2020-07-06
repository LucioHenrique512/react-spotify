import React, { useEffect } from "react";
import Loading from "../../components/Loading";
import "./Authorize.scss";

const Authorize = () => {
  return (
    <div className="callback" data-testid="callback">
      <Loading />
    </div>
  );
};

export default Authorize;
