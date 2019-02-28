import React from "react";
import "./issueRow.css";
import { formatDate } from "./util";

export class IssueRow extends React.Component {
  render() {
    const { issue, width } = this.props;

    return (
      <tr className="hightlightRow">
        <td colSpan="4" style={{ paddingLeft: 30 }}>
          <a
            href={issue.url}
            target="blank"
            style={{ display: "inline-block", width: `${width}px` }}
          >
            #{issue.number}
          </a>
          <label>{issue.title}</label>
          <span style={{ color: "gray" }}>{formatIssueDate(issue)}</span>
        </td>
      </tr>
    );
  }
}

function formatIssueDate(issue) {
  return " " + formatDate(new Date(issue.date));
}
