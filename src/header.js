import React from "react";
import { IssueLabel } from './issueRow';

export function Header() {
  return (
    <React.Fragment>
      <h1>Find Great Open Source Projects</h1>
      <p>Made for new contributors to find great Open Source projects.</p>
      <p>
        Discover Issues and Repositories with
        {IssueLabel('7057ff', 'good first issue')}
        and
        {IssueLabel('008672', 'help wanted')}
      </p>
    </React.Fragment>
  );
}
