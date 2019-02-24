import React from "react";
import { formatDaysAgo } from "./util";

export class RepoRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    const { repo, children } = this.props;
    const { expanded } = this.state;
    var setExpanded = () => this.setState({ expanded: !expanded });

    return (
      <React.Fragment>
        <tr key={repo.title}>
          <td>
            <button style={{ marginRight: "5px" }} onClick={setExpanded}>
              {expanded ? "\u2212" : "+"}
            </button>
            <a href={repo.url} target="blank">
              {repo.title}
            </a>
          </td>
          <td className="rightAlign">{repo.issues.length}</td>
          <td className="rightAlign">{repo.stars}</td>
          <td className="rightAlign">
            {formatDaysAgo(repo.lastUpdate, Date.now())}
          </td>
        </tr>
        {expanded && children}
      </React.Fragment>
    );
  }
}

//TODO

function starSvg() {
  return (
    <span>
      <svg
        aria-label="star"
        viewBox="0 0 14 16"
        version="1.1"
        width="14"
        height="16"
        role="img"
      >
        <path
          fillRule="evenodd"
          d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
        />
      </svg>
    </span>
  );
}

/*
return <span><svg style={{
ariaLabel:"star"
viewBox:"0 0 14 16",
version:"1.1",
width:"14",
height:"16",
role:"img"
}}>
<path style={{
fillRule:"evenodd",
d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
}}>
</path>
</svg>
</span>
*/
