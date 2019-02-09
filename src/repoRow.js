import React from 'react'

export class RepoRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  render() {
    const { repo, children } = this.props
    const { expanded } = this.state
    var setExpanded = () => this.setState({expanded: !expanded})
    return(
      <React.Fragment>
      <tr key={repo.title}>
        <td>
        <button
          onClick={setExpanded}
        >
        {expanded ? "\u2212" : "+"}
        </button>
        <a href={repo.url} target="blank">{repo.title}</a>
        </td>
        <td>{repo.issues.length}</td>
        <td>{repo.stars}</td>
        <td>{repo.lastUpdate}</td>
      </tr>
      {expanded && children}
      </React.Fragment>
    )
  }
}
