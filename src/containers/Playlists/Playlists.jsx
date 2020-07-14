import React from "react";
import { Loading } from "../../components";
import "./Playlists.scss";
import Playlistitem from "./PlaylistItem";
import {RouteHeader} from "../../components"

const Playlists = ({ data, categoryName, categoryId, isLoading, path }) => {
  if (isLoading) return <Loading />;
  return (
    <div className="playlists" data-testid="playlists">
      <div className="container">
        <RouteHeader categoryName={categoryName} path={path}/>
        <div className="playlists__content">
          {data.map(({ id, description, name, images }) => (
            <Playlistitem
              key={id}
              id={id}
              categoryId={categoryId}
              description={description}
              image={images[0].url}
              name={name}
              path={path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlists;
