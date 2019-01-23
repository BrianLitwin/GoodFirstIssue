import React from 'react';
import './resultsTable.css'

export default class ResultsTable extends React.Component {
  render() {
    const { data } = this.props;

    function renderHeader() {
      return(
        <thead className="TableHead">
        <tr>
          <th>Repository</th>
          <th>Good First Issues</th>
          <th>Stars</th>
          <th>Last Updated</th>
        </tr>
        </thead>
      )
    }

    function renderTableRows() {
      return(
        <React.Fragment>
        { data.repos.map((repo) => (
            <tr>
              <td>{repo.name}</td>
              <td>{repo.issues}</td>
              <td>{repo.stars}</td>
              <td>{repo.lastUpdate}</td>
            </tr>
        ))}
        </React.Fragment>
      )
    }

    const tableStyle = { width: '100%' }

    return(
      <table style={tableStyle}>
      {renderHeader()}
      {renderTableRows()}
      <tbody>
      </tbody>
      </table>
    )
  }
}
