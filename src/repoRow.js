import React from "react";
import { formatDaysAgo } from "./util";
import "./repoRow.css";

export class RepoRow extends React.Component {
  render() {
    const { repo, children, expanded, setExpanded } = this.props;

    return (
      <React.Fragment>
        <tr className="hightlightRow" key={repo.title}>
          <td style={{ float: "left" }}>
            <button style={{ marginRight: "5px" }} onClick={setExpanded}>
              {expanded ? "\u2212" : "+"}
            </button>
            <a href={repo.url} target="blank">
              {repo.title}
            </a>
          </td>
          <td className="rightAlign">{repo.issues.length}</td>
          <td className="rightAlign">
            {repo.stars} {starSvg()}
          </td>
          <td className="rightAlign">
            {formatDaysAgo(repo.lastUpdate, Date.now())}
          </td>
        </tr>
        <tr />
        {expanded && children}
      </React.Fragment>
    );
  }
}

//TODO

function starSvg() {
  return (
    <svg
      aria-label="star"
      style={{ marginBottom: "-6px", marginRight: "-3px" }}
      viewBox="0 0 15 20"
      version="1.1"
      width="15"
      height="20"
      role="img"
    >
      <path
        fillRule="evenodd"
        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
      />
    </svg>
  );
}
