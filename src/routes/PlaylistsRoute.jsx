import React, { useEffect } from "react";
import { Playlists } from "../containers";
import { useParams } from "react-router-dom";
import api from "../modules/api";
import endpoints from "../modules/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { contentAction } from "../actions";
import { getNameByID } from "../modules/utils";

const PlaylistRoute = ({ path }) => {
  const { categoryid } = useParams();
  const dispatch = useDispatch();
  const { content, auth } = useSelector((state) => state);
  const { playlists, categories } = content;
  const { tokenType, accessToken } = auth;

  useEffect(() => {
    if (categoryid) {
      const playlistEndpoint = endpoints.getPlaylists(categoryid);
      api
        .get(playlistEndpoint, null, `${tokenType} ${accessToken}`)
        .then((response) => {
          if (response) {
            const { playlists } = response;
            if (playlists) {
              const { items } = playlists;
              dispatch(contentAction.updatePlaylistArray(items));
            }
          }
        });
    }
  }, [categoryid, api]);



  return (
    <Playlists
      data={playlists}
      categoryName={getNameByID(categories, categoryid)}
      isLoading={playlists.length === 0}
      categoryId={categoryid}
      path={path}
    />
  );
};

export default PlaylistRoute;
