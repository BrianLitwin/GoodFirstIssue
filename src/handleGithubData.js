
function getIssues(data) {
    const issues = data.data.search.edges.map(edge=>{ return edge.node  });
    const pageInfo = data.data.search.pageInfo;
    return { issues, pageInfo }
}

function formatIssues(issues) {
  issues.forEach((issue) => {
    formatIssue(issue)
  })
}

function getIssue(issue) {
  const url = issue.url
  const createdAt = issue.createdAt
  const title = issue.title
  const number = issue.number

  return {
    title, number, url, createdAt
  }
}

export function formatIssue(issue) {
  const repo = issue.repository
  const title = repo.owner.login + "/" + repo.name
  const stars = repo.stargazers.totalCount
  const lastUpdate = repo.repo.updatedAt
  const link = repo.url
  const issues = [getIssue(issue)]

  return { title, stars, lastUpdate, link, issues,
    incrementIssueCount: function(issue) {
      this.issues.push(issue)
    }
  }
}
