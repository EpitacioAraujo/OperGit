import React from "react";

import userService from "../../services/user";

import loupe from "../../assets/images/dark-loupe.svg";
import "./styles.css";

export default function Header({ setUsers, name, setName }) {
  const findUsers = async (e) => {
    e.preventDefault();

    const userList = await userService.searchUser(name);
    setUsers(userList.items);
  };

  return (
    <header className="header">
      <form className="form-search" onSubmit={findUsers}>
        <input
          type="text"
          placeholder="Insira o nome do usuário git!"
          className="input-user-search"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit" className="button-search">
          <img src={loupe} alt="loupe icon" className="search-icon" />
        </button>
      </form>
    </header>
  );
}
