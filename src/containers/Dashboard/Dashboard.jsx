import React from "react";
import "./Dashboard.scss";
import { Player } from "../";
import { useSelector } from "react-redux";

const Dashboard = ({ children }) => {
  const { playerHeight } = useSelector((state) => state.content);
  return (
    <div
      className="dashboard"
      data-testid="dashboard"
      style={{ paddingBottom: `${playerHeight}px` }}
    >
      {children}
      <Player />
    </div>
  );
};

export default Dashboard;
