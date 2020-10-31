import React from "react";

import "./style.css";

export default function UserCard({ index, data, onClick = () => null }) {
  return (
    <div className="card-user-container">
      <img src={data.avatar_url} alt="User profile" className="profile" />

      <div className="description">
        <p className="name">{data.name}</p>
        <p className="bio">{data.bio}</p>
      </div>

      <footer className="link-profile">
        <button className="link" onClick={() => onClick(index)}>
          Ver perfil
        </button>
      </footer>
    </div>
  );
}
