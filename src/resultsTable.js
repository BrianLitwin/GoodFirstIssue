import React from 'react';
import './resultsTable.css'
import { sortReposByIssueCount, sortReposByStars } from './load'

export default class ResultsTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortBy: 'issues'
    }
  }

  render() {
    const { data } = this.props;
    const { sortBy } = this.state;

    let repos;
    switch (sortBy) {
      case 'issues':
        repos = sortReposByIssueCount(data)
        break
      case 'stars':
        repos = sortReposByStars(data)
        break
      default:
        throw Error('invalid sort parameter')
    }

    var setSortBy = (sortBy) => this.setState({sortBy: sortBy})

    function renderHeader() {
      return(
        <thead>
        <tr>
          <th>Repository</th>
          <th onClick={() => setSortBy('issues')} className="hightlightHover">Good First Issues</th>
          <th onClick={() => setSortBy('stars')} className="hightlightHover">Stars</th>
          <th>Last Updated</th>
        </tr>
        </thead>
      )
    }

    function renderTableRows() {
      return(
        <React.Fragment>
        { repos.map((repo) => (
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
      <table style={{width: '100%'}}>
      {renderHeader()}
      {renderTableRows()}
      <tbody>
      </tbody>
      </table>
    )
  }
}
