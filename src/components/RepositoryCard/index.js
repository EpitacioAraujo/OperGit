/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import gitIcon from "../../assets/icons/github-icon.svg";

import "./styles.css";

export default function RepositoriesCard({ data }) {
  const languages = Object.keys(data.languages);

  return (
    <article className="repository-container">
      <div className="repositories-primary-title">{data.name}</div>

      <div className="repositories-secondary-title">{data.description}</div>

      <div className="repository-definition">
        <div className="languages">
          <p className="repositories-primary-title subtitle">Linguagens:</p>
          <ul className="list-languages">
            {languages.map((language) => (
              <il className="item-list-languages repositories-secondary-title">
                {language}
              </il>
            ))}
          </ul>
        </div>

        <a
          target="_blank"
          href={data.html_url}
          className="github-repository-link repositories-secondary-title"
        >
          <img
            src={gitIcon}
            alt="Github icon"
            className="github-repository-icon"
          />
        </a>
      </div>
    </article>
  );
}
