function getTestData() {
  return {
    "data": {
      "search": {
        "edges": [
          {
            "node": {
              "repository": {
                "owner": {
                  "login": "same"
                },
                "updatedAt": "2019-01-24T12:16:46Z",
                "url": "https://github.com/dm-drogeriemarkt/foreman_wreckingball",
                "name": "same",
                "stargazers": {
                  "totalCount": 5
                }
              },
              "url": "https://github.com/dm-drogeriemarkt/foreman_wreckingball/issues/82",
              "createdAt": "2019-01-24T10:42:30Z",
              "title": "improve UI for compute resource overview page",
              "number": 82
            }
          },
          {
            "node": {
              "repository": {
                "owner": {
                  "login": "mrkn"
                },
                "updatedAt": "2019-01-24T02:34:01Z",
                "url": "https://github.com/mrkn/iruby-rails",
                "name": "iruby-rails",
                "stargazers": {
                  "totalCount": 13
                }
              },
              "url": "https://github.com/mrkn/iruby-rails/issues/4",
              "createdAt": "2019-01-24T01:30:46Z",
              "title": "Add rake task like jupyter_on_rails gem",
              "number": 4
            }
          },
          {
            "node": {
              "repository": {
                "owner": {
                  "login": "same"
                },
                "updatedAt": "2019-01-23T19:47:44Z",
                "url": "https://github.com/outcomesinsights/conceptql",
                "name": "same",
                "stargazers": {
                  "totalCount": 12
                }
              },
              "url": "https://github.com/outcomesinsights/conceptql/issues/208",
              "createdAt": "2019-01-23T19:37:42Z",
              "title": "person.year_of_birth is set to 2000 value is missing",
              "number": 208
            }
          },
          {
            "node": {
              "repository": {
                "owner": {
                  "login": "abonas"
                },
                "updatedAt": "2019-01-23T11:00:01Z",
                "url": "https://github.com/abonas/kubeclient",
                "name": "kubeclient",
                "stargazers": {
                  "totalCount": 214
                }
              },
              "url": "https://github.com/abonas/kubeclient/issues/389",
              "createdAt": "2019-01-23T10:49:21Z",
              "title": "HTTP requests to arbitrary path",
              "number": 389
            }
          }
        ],
        "pageInfo": {
          "endCursor": "Y3Vyc29yOjQ=",
          "hasNextPage": true
        }
      }
    }
  }
}



var theD = getTestData()

function getIssues(data) {
    const issues = data.data.search.edges.map(edge=>{ return edge.node  });
    const pageInfo = data.data.search.pageInfo;
    return { issues, pageInfo }
}

const issues = getIssues(theD).issues

function makeRepo(issue) {
  const repo = issue.repository
  const title = repoTitle(issue)
  console.log(title)
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
  console.log(title)
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

function organizeIssuesIntoRepos(issues, makeOrUpdateRepo) {
  const repositories = new Map()
  issues.forEach((issue) => {
    makeOrUpdateRepo(issue, repositories)
  })
  console.log(repositories)
}

console.log(organizeIssuesIntoRepos(issues, makeOrUpdateRepo))













