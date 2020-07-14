import React from "react";
import Logo from "../../components/Logo";
import "./Topbar.scss";
import { useSelector } from "react-redux";
import { FiUser } from "react-icons/fi";

const Topbar = () => {
  const {
    user: { name, thumb, userUrl },
  } = useSelector((state) => state);
  return (
    <header className="topbar" data-testid="topbar">
      <div className="container">
        <div className="spotify-brand">
          <Logo />
        </div>
        <a
          href={userUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="user"
        >
          <span className="user__name">{name}</span>
          <div className="user__thumb">
            {thumb !== "" || thumb !== "undefined" ? (
              <img src={thumb} alt="User thumb" />
            ) : (
              <FiUser />
            )}
          </div>
        </a>
      </div>
    </header>
  );
};

export default Topbar;
