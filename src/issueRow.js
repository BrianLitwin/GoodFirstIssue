import React from "react";
import "./issueRow.css";
import { formatDate } from "./util";

export class IssueRow extends React.Component {
  render() {
    const { issue, width, indentStyle } = this.props;

    return (
      <tr className="hightlightRow">
        <td colSpan="4" style={{ paddingLeft: 30 }}>
          <div>
            <a
              href={issue.url}
              target="blank"
              style={{ display: "inline-block", minWidth: `${width}px` }}
            >
              #{issue.number}
            </a>
            <div>
              <label>{issue.title}</label>
              <span style={{ color: "gray" }}>{formatIssueDate(issue)}</span>
              {issue.labels.map(label => IssueLabel(label.color, label.name))}
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

function IssueLabel(bgc, txt) {
  const backgroundColor = `#${bgc}`;
  const style = {
    marginLeft: "6px",
    padding: "0.15em 6px",
    fontSize: "14px",
    fontweight: "600",
    lineHeight: "15px",
    borderRadius: "2px",
    boxShadow: "inset 0 -1px 0 rgba(27,31,35,0.12)",
    display: "inline-block",
    color: textOverlay(backgroundColor),
    backgroundColor
  };
  return <label style={style}>{txt}</label>;
}

function formatIssueDate(issue) {
  return " " + formatDate(new Date(issue.date));
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16)
      }
    : null;
}

function textOverlay(bgc) {
  const rgb = hexToRgb(bgc);
  const { red, green, blue } = rgb;
  var o = Math.round(
    (parseInt(red) * 299 + parseInt(green) * 587 + parseInt(blue) * 114) / 1000
  );
  return o > 125 ? "black" : "white";
}
