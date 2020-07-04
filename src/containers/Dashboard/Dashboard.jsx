import React from "react";
import "./Dashboard.scss";

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard" data-testid="dashboard">
      {children}
    </div>
  );
};

export default Dashboard;
