import React from 'react';

export class IssueRow extends React.Component {
  render() {
    const {issue} = this.props
    return(
      <tr>
        <td colSpan="4" style={{paddingLeft: 30}}>
        <a href={issue.url} target="blank">
          #{issue.number}
        </a>
          <label>{issue.title}</label>
        </td>
      </tr>
    )
  }
}
