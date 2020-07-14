import React, { useEffect } from "react";
import { Tracks } from "../containers";
import api from "../modules/api";
import endpoints from "../modules/endpoints";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { contentAction } from "../actions";
import { getNameByID } from "../modules/utils";

const TracksRoute = ({ path }) => {
  const {
    auth: { accessToken, tokenType },
    content: { tracks, playlists },
  } = useSelector((state) => state);
  const { playlistid, categoryid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const tracksEndpoint = endpoints.getTracks(playlistid);
    api
      .get(tracksEndpoint, null, `${tokenType} ${accessToken}`)
      .then((response) => {
        if (response) {
          const { items } = response;
          if (items) dispatch(contentAction.updateTracksArray(items));
        }
      });
  }, [playlistid,accessToken,tokenType,dispatch]);

  return (
    <Tracks
      categoryName={getNameByID(playlists, playlistid)}
      data={tracks}
      isLoading={tracks.length === 0}
      path={`${path}/${categoryid}`}
    />
  );
};

export default TracksRoute;
