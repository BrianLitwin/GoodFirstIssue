import React from "react";
import "./header.css";

export function Header() {
  return (
    <React.Fragment>
      <h1>Find Great Open Source Projects</h1>
      <p>Made for new contributors to find great Open Source projects.</p>
      <p>
        Discover Issues and Repositories with
        <label className="IssueLabel GoodFirstIssue">
          good girst issue
        </label>{" "}
        and
        <label className="IssueLabel HelpWanted">help wanted</label> labels.
      </p>
    </React.Fragment>
  );
}
