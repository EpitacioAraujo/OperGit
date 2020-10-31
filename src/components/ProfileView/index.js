import React, { useState } from "react";
import Modal from "react-modal";

import RepositoryCard from "../../components/RepositoryCard";

import repositoryService from "../../services/repositories";

import closeIcon from "../../assets/icons/close-icon.svg";
import usersIcon from "../../assets/icons/users-icon.svg";

import "./style.css";
export default function ProfileView({
  visible,
  dataUsers,
  userRecurrent = 0,
  setProfileVisible,
}) {
  const [repositories, setRepositories] = useState([]);

  const user = dataUsers[userRecurrent];

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={visible}
      className="modal-view-profile"
      overlayClassName="overlay"
      onAfterOpen={async () => {
        const repos = await repositoryService.searchRepositories(user.login);
        setRepositories(repos);
      }}
    >
      {user && (
        <div className="container-modal-view-profile">
          <header className="modal-header">
            <img
              src={user.avatar_url}
              alt="User profile"
              className="modal-profile"
            />
            <div className="modal-presentation">
              <p className="modal-primary-title">{user.name}</p>
              <p className="modal-secondary-title">{user.login}</p>
            </div>
            <button className="button-close-modal" onClick={setProfileVisible}>
              <img src={closeIcon} alt="Close button" className="close-icon" />
            </button>
          </header>

          <section className="description">
            <div className="biography modal-secondary-title">{user.bio}</div>
            <div className="social">
              <img src={usersIcon} alt="users-icon" className="users-icon" />
              <div className="follow modal-secondary-title">
                seguindo:
                {user.following}
              </div>
              <div className="follow modal-secondary-title">
                seguidores:
                {user.followers}
              </div>
            </div>
          </section>

          <section>
            <p className="modal-primary-title">repositórios no github</p>
          </section>

          {repositories.map((repository) => (
            <RepositoryCard data={repository} />
          ))}
        </div>
      )}
    </Modal>
  );
}
