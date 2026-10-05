import React from "react";
import "./header.css";
import { IssueLabel } from "./issueRow";

export function Header() {
  return (
    <React.Fragment>
      <h1>Find Great Open Source Projects</h1>
      <p>Made for new contributors to find great Open Source projects.</p>
      <p>
        Discover Issues and Repositories with{" "}
        {IssueLabel("006b75", "good first issue")}{" "}
        and{" "}
        {IssueLabel("d73a4a", "help wanted")} labels.
      </p>
    </React.Fragment>
  );
}