import React from "react";
import { Link } from "react-router-dom";

const PlaylistItem = ({ categoryId, description, id, image, name, path }) => {
  return (
    <div className="playlists__item" data-testid="playlist">
      <Link
        className="playlists__item__link"
        to={`${path}/${categoryId}/${id}`}
        style={{ backgroundImage: `url(${image})` }}
        title={name}
      ></Link>
      <span className="playlists__item__description">
        <strong>{name}</strong>
        {description}
      </span>
    </div>
  );
};

export default PlaylistItem;
