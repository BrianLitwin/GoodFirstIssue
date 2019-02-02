import React from 'react';
import './resultsTable.css'
import { LanguagePicker } from './languagePicker'

export default class ResultsTable extends React.Component {
  render() {
    const { data } = this.props;

    function renderLanuagePicker() {
      return (
        <LanguagePicker />
      )
    }

    function renderHeader() {
      return(
        <thead>
        <tr>
          <th>Repository</th>
          <th className="hightlightHover">Good First Issues</th>
          <th className="hightlightHover">Stars</th>
          <th>Last Updated</th>
        </tr>
        </thead>
      )
    }

    function renderTableRows() {
      return(
        <React.Fragment>
        { data.map((repo) => (
              <tr key={repo.title}>
                <td>{repo.title}</td>
                <td>{repo.issues.length}</td>
                <td>{repo.stars}</td>
                <td>{repo.lastUpdate}</td>
              </tr>
        ))}
        </React.Fragment>
      )
    }

    return(
      <React.Fragment>
      {renderLanuagePicker()}
      <table style={{width: '100%'}}>
      {renderHeader()}
      {renderTableRows()}
      <tbody>
      </tbody>
      </table>
      </React.Fragment>
    )
  }
}
