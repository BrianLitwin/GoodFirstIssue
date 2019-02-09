

var sortIssueCount = (r1, r2) => r2.issues.length - r1.issues.length
var sortStarCount = (r1, r2) => r2.stars - r1.stars

function sortRepos(firstSort, secondSort, repoMap) {
  const repos = Array.from(repoMap.values())

  function sortRepos(r1, r2) {
    const result = firstSort(r1, r2)
    if (result === 0) {
      return secondSort(r1, r2)
    } else {
      return result
    }
  }

  return repos.sort(sortRepos)
}

export function sortReposByIssueCount(repoMap) {
  return sortRepos(sortIssueCount, sortStarCount, repoMap)
}

export function sortReposByStars(repoMap) {
  return sortRepos(sortStarCount, sortIssueCount, repoMap)
}

export function processHttpResponseData(data) {
    const issues = data.data.search.edges.map(edge=>{ return edge.node  });
    const pageInfo = data.data.search.pageInfo;
		const endCursor = pageInfo.endCursor
		setDates(issues)
    return { issues, endCursor }
}


// do this here so that we can examine against cutoff date - // TODO: test this
export function setDates(issues) {
	issues.forEach((issue) => {
		issue.date = new Date(issue.createdAt).getTime()
	})
}

export function organizeIssuesIntoRepos(issues) {
  const repoMap = new Map()
  issues.filter((issue) => {
		return issue.repository !== undefined // TODO test this
	}).forEach((issue) => {
    makeOrUpdateRepo(issue, repoMap)
  })
  return repoMap
}

function makeRepo(issue) {
  const repo = issue.repository
  const title = repoTitle(issue)
  const stars = repo.stargazers.totalCount
  const lastUpdate = repo.updatedAt
  const url = repo.url
  const issues = [formatIssue(issue)]
	const issueMap = new Set()

	issueMap.add(issues[0].number) // TODO: Test this- duplicate issues

  return { title, stars, lastUpdate, url, issues, issueMap,
    addIssue: function(issue) {
			if (!this.issueMap.has(issue.number)) {
				this.issues.push(formatIssue(issue)) // TODO: Test this -no duplicate
				this.issueMap.add(issue.number)
			} else {
				console.log("duplicate issue")
			}
    }
  }
}

function repoTitle(issue) {
	// TODO sometimes you get passed an empty object here
  return issue.repository.owner.login + "/" + issue.repository.name
}

function makeOrUpdateRepo(issue, repositories) {
  const title = repoTitle(issue)

  if (repositories.has(title)) {
    const repository = repositories.get(title)
    repository.addIssue(issue)
  } else {
    repositories.set(title, makeRepo(issue))
  }
}



//
// TODO: This is very dumb method
//


function formatIssue(issue) {
  const url = issue.url
  const createdAt = issue.createdAt
  const title = issue.title
  const number = issue.number
	const date = issue.date
  return {
    title, number, url, createdAt, date
  }
}
