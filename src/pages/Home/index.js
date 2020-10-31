import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/oper-git-icon.svg";

import "./style.css";

export default function Home() {
  return (
    <main>
      <div className="description">
        <p className="presentation">
          Oper git, um jeito Oper de chegar até você!
        </p>
        <Link to="listUsers">
          <button className="go-to-search">Procurar devs!</button>
        </Link>
      </div>
      <img src={logo} alt="Logo oper git" className="logo" />
    </main>
  );
}
