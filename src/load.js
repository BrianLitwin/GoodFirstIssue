import { testData_1 } from './testdata'

export function loadTestData() {
  const data = testData_1
  const issues = getIssues(data).issues
  const repoMap = organizeIssuesIntoRepos(issues)
  return repoMap
}


export function sortReposByIssueCount(repoMap) {
  const repos = Array.from(repoMap.values())
  var sortRepos = (r1, r2) => r2.issues.length - r1.issues.length
  return repos.sort(sortRepos)
}

export function sortReposByStars(repoMap) {
  const repos = Array.from(repoMap.values())
  var sortRepos = (r1, r2) => r2.stars - r1.stars
  return repos.sort(sortRepos)
}

export function getIssues(data) {
    const issues = data.data.search.edges.map(edge=>{ return edge.node  });
    const pageInfo = data.data.search.pageInfo;
    return { issues, pageInfo }
}

export function organizeIssuesIntoRepos(issues) {
  const repositories = new Map()
  issues.forEach((issue) => {
    makeOrUpdateRepo(issue, repositories)
  })
  return repositories
}

function makeRepo(issue) {
  const repo = issue.repository
  const title = repoTitle(issue)
  const stars = repo.stargazers.totalCount
  const lastUpdate = repo.updatedAt
  const link = repo.url
  const issues = [formatIssue(issue)]

  return { title, stars, lastUpdate, link, issues,
    addIssue: function(issue) {
      this.issues.push(formatIssue(issue))
    }
  }
}

function repoTitle(issue) {
  return issue.repository.owner.login + "/" + issue.repository.name
}

function makeOrUpdateRepo(issue, repositories) {
  const title = repoTitle(issue)

  if (repositories.has(title)) {
    const repository = repositories.get(title)
    repository.addIssue(formatIssue(issue))
  } else {
    repositories.set(title, makeRepo(issue))
  }
}

function formatIssue(issue) {
  const url = issue.url
  const createdAt = issue.createdAt
  const title = issue.title
  const number = issue.number

  return {
    title, number, url, createdAt
  }
}
