import React, { useEffect } from "react";
import { Playlists } from "../containers";
import { useParams } from "react-router-dom";
import api from "../modules/api";
import endpoints from "../modules/endpoints";

const PlaylistRoute = () => {
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid) {
      const playlistEndpoint = endpoints.getPlaylists(categoryid);
      api.get(playlistEndpoint).then((response) => {
        if (response) {
          const { playlists } = response;
          if (playlists) {
            const {items} = playlists
            console.log(items);
          }
        }
      });
    }
  }, [categoryid, api]);

  return <Playlists />;
};

export default PlaylistRoute;
