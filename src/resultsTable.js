import React from "react";
import "./resultsTable.css";
import { RepoRow } from "./repoRow";
import { IssueRow } from "./issueRow";
import { sortReposByIssueCount, sortReposByStars } from "./load";

export default class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "issues"
    };
  }

  render() {
    const { repositories, setExpanded, expandedRows } = this.props;
    const { sortBy } = this.state;

    let repos;
    switch (
      sortBy //TODO: if you set the sortBy state, the expansion state of the repo is off
    ) {
      case "issues":
        repos = sortReposByIssueCount(repositories);
        break;
      case "stars":
        repos = sortReposByStars(repositories);
        break;
      default:
        throw Error("invalid sort parameter");
    }

    const setSortBy = sortBy => {
      if (sortBy != this.state.sortBy) {
        this.setState({ sortBy, expandedRows });
      }
    };

    function renderHeader() {
      function header() {
        return (
          <thead>
            <tr>
              <th className="leftAlign">Repository</th>
              <th
                className="rightAlign hightlightHover"
                onClick={() => setSortBy("issues")}
              >
                Good First Issues
              </th>
              <th
                className="rightAlign hightlightHover"
                onClick={() => setSortBy("stars")}
              >
                Stars
              </th>
              <th className="rightAlign">Last Updated</th>
            </tr>
          </thead>
        );
      }
      return repos.length > 0 ? header() : <div />;
    }

    function renderTableRows() {
      return (
        <React.Fragment>
          {repos.map((repo, i) => (
            <RepoRow
              repo={repo}
              expanded={expandedRows.has(i)}
              setExpanded={() => setExpanded(i)}
            >
              <tr>
                <td colSpan="4" style={{ paddingLeft: 30 }}>
                  {repo.description}
                </td>
              </tr>
              {repo.issues
                .sort((i, j) => j.number - i.number) // perhaps not the best place to do this
                .map(issue => {
                  return (
                    <IssueRow issue={issue} width={calcWidth(repo.issues[0])} />
                  );
                })}
            </RepoRow>
          ))}
        </React.Fragment>
      );
    }
    //TODO: Show table headers when loading
    return (
      <table style={{ width: "100%", marginBottom: "50px" }}>
        {renderHeader()}
        <tbody>{renderTableRows()}</tbody>
      </table>
    );
  }
}

function calcWidth(issue) {
  const n = issue.number;
  if (n >= 10000) {
    return 70;
  } else if (n >= 1000) {
    return 60;
  } else if (issue.number >= 100) {
    return 50;
  } else {
    return 40;
  }
}
