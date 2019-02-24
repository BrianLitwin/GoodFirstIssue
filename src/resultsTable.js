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
    const { data } = this.props;
    const { sortBy } = this.state;

    let repos;
    switch (
      sortBy //TODO: if you set the sortBy state, the expansion state of the repo is off
    ) {
      case "issues":
        repos = sortReposByIssueCount(data);
        break;
      case "stars":
        repos = sortReposByStars(data);
        break;
      default:
        throw Error("invalid sort parameter");
    }

    var setSortBy = sortBy => this.setState({ sortBy: sortBy });

    function renderHeader() {
      function header() {
        return (
          <thead>
            <tr>
              <th>Repository</th>
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
          {repos.map(repo => (
            <RepoRow repo={repo}>
              {repo.issues.map(issue => {
                return (
                  <IssueRow issue={issue} width={returnWidth(repo.issues[0])} />
                );
              })}
            </RepoRow>
          ))}
        </React.Fragment>
      );
    }
    //TODO: Show table headers when loading
    return (
      <table style={{ width: "100%" }}>
        {renderHeader()}
        <tbody>{renderTableRows()}</tbody>
      </table>
    );
  }
}

function returnWidth(issue) {
  if (issue.number >= 1000) {
    return 60;
  } else if (issue.number >= 100) {
    return 50;
  } else {
    return 40;
  }
}
