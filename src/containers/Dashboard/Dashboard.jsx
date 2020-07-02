import React from "react";
import "./Dashboard.scss";
import Topbar from "../Topbar";

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard" data-testid="dashboard">
      <Topbar />
      {children}
    </div>
  );
};

export default Dashboard;
