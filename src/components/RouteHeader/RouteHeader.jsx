import React from "react";
import { Link } from "react-router-dom";
import "./RouteHeader.scss";
import { FiArrowLeft } from "react-icons/fi";

const RouterHeader = ({ categoryName, path }) => {
  return (
    <div className="route-header" data-testid="route-header">
      <div className="route-header__title-group">
        <Link to={path} className="back-button">
          <FiArrowLeft />
        </Link>
        <span className="route-header__title">{categoryName}</span>
      </div>
    </div>
  );
};

export default RouterHeader;
