import React, { useState } from "react";
import { BsPlayFill, BsVolumeUp } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { contentAction } from "../../actions";

import "./Track.scss";

const Track = ({ track }) => {
  const {
    content: { playingNowId, playingNowTrack, status },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (
      (playingNowId === null, playingNowTrack === null, status === "idle") ||
      (playingNowId !== track.id, status === "playing" || status === "paused")
    ) {
      //console.log(track.id);
      dispatch(contentAction.updatePlayingState(track.id, track, "playing"));
    }
    if (
      playingNowId === track.id &&
      playingNowTrack !== null &&
      status === "playing"
    ) {
      dispatch(contentAction.updatePlayingState());
    }
  };

  return (
    <div
      className={`track ${playingNowId === track?.id ? "is-playing" : ""}`}
      data-testid="track"
    >
      <div className="track__play" onClick={handleClick}>
        <div className="track__play__wrapper">
          <BsPlayFill className="track__play_icon" />
          <BsVolumeUp className="track__play_icon" />
        </div>
      </div>
      <div className="track__info">
        <span className="track__name">{track?.name}</span>
        <span className="track__artists">
          {track?.artists.map(({ name }) => name).join(", ")}
        </span>
      </div>
    </div>
  );
};

export default Track;
