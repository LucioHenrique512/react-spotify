import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { contentAction } from "../../actions";

import "./Player.scss";

const Player = () => {
  const {
    content: { playerHeight, playingNowTrack, status },
  } = useSelector((state) => state);
  const [isPlaying, setIsplaying] = useState(false);
  const [audioPercentage, setAudioPercentage] = useState("0%");
  const dispatch = useDispatch();
  const audioElement = useRef(null);

  useEffect(() => {
    const audioPlayer = audioElement.current;
    setIsplaying(status === "playing");
    if (status === "playing") {
      audioPlayer.play();
    }
    if (status === "paused") {
      audioPlayer.pause();
    }
  }, [status, setIsplaying, audioElement]);

  const handleClickControl = () => {
    dispatch(
      contentAction.updatePlayingStatus(isPlaying ? "paused" : "playing")
    );
  };

  const handleTimeUpdate = (e) => {
    const audioPlayer = audioElement.current;
    setAudioPercentage(
      `${Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100)}%`
    );
  };

  const handleAudioEnd = () => {
    dispatch(contentAction.updatePlayingState());
  };

  return (
    <div
      className="player is-playing"
      style={{ height: `${playerHeight}px` }}
      data-testid="player"
    >
      <div className="player__wrapper">
        {playingNowTrack ? (
          <>
            <div className="player__progress-bar">
              <div
                className="player__progress-bar__stroke"
                style={{ width: audioPercentage }}
              />
            </div>
            <div className="container">
              <figure
                className="player__album-cover"
                style={{
                  backgroundImage: `url(${playingNowTrack?.album?.images[1]?.url})`,
                }}
              />
              <div className="player__status">
                <div className="player__artist">
                  <span className="player__music">{playingNowTrack?.name}</span>
                  <span className="player__artists">
                    {playingNowTrack?.artists
                      .map(({ name }) => name)
                      .join(", ")}
                  </span>

                  <div
                    className={`player__status__current ${
                      isPlaying ? "is-playing" : ""
                    }`}
                  >
                    <span>Pausado</span>
                    <span>Reproduzindo</span>
                  </div>
                </div>
              </div>
              <div className="player__controls" onClick={handleClickControl}>
                <div
                  className={`player__control ${!isPlaying ? "is-paused" : ""}`}
                >
                  {!isPlaying ? <BsPlayFill /> : <BsPauseFill />}
                </div>
              </div>
            </div>
            <audio
              ref={audioElement}
              src={playingNowTrack?.preview_url}
              autoPlay
              preload="metadata"
              onEnded={handleAudioEnd}
              onTimeUpdate={handleTimeUpdate}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Player;
