import React from "react";
import { Loading, RouteHeader } from "../../components";
import "./Tracks.scss";
import { Track } from "../";

const Tracks = ({ categoryName, data, isLoading, path }) => {
  //console.log(data);
  if (isLoading) return <Loading />;
  return (
    <div className="tracks" data-testid="tracks">
      <div className="container">
        <RouteHeader categoryName={categoryName} path={`${path}`}/>
        <div className="tracks__content">
          {data.map(({ track }) => (
            <Track key={track?.id} track={track} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracks;
