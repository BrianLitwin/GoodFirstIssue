
import { testData_1 } from './testdata'
import {
  handleData,
  processHttpResponseData,
  organizeIssuesIntoRepos,
  sortReposByIssueCount,
  sortReposByStars
} from './load'

describe('processHttpResponseData()', () => {
  it('loads correct number of issues', () => {
    const issues = processHttpResponseData(testData_1).issues
    expect(issues.length).toBe(6)
  });

  /* TODO: test paging info */
})

describe('organizeIssuesIntoRepos()', () => {

  var testData = () => testData_1

  it('has correct number of repos', () => {
    const issues = processHttpResponseData(testData()).issues
    const repos = organizeIssuesIntoRepos(issues)
    expect(repos.size).toBe(3)
  });

  it('issues have correct properties', () => {
    const issues = processHttpResponseData(testData()).issues
    const repos = organizeIssuesIntoRepos(issues)
    const issue = repos.get('abonas/kubeclient').issues[0]
    expect(issue.title).toBe("HTTP requests to arbitrary path")
  });

})

describe('sortReposByIssueCount()', () => {

  var testData = () => testData_1
  const issues = () => processHttpResponseData(testData()).issues

  it('sorts in descending order by issues', () => {
    const repoMap = organizeIssuesIntoRepos(issues())
    const repoArray = Array.from(repoMap)

    const repos = sortReposByIssueCount(repoMap)
    expect(repos[0].issues.length).toBe(3)
    expect(repos[1].issues.length).toBe(2)
    expect(repos[2].issues.length).toBe(1)
  });

  it('sorts secondarily by stars', () => {
    const repoMap = organizeIssuesIntoRepos(issues())
    const repoArray = Array.from(repoMap.values())

    var fakeIssue = {name: 'fakeIssue'}
    // give all repos the same issue count
    repoArray.forEach((repo) => repo.issues = [fakeIssue])

    repoArray[0].stars = 3
    repoArray[1].stars = 5
    repoArray[2].stars = 2

    const repos = sortReposByIssueCount(repoMap)
    expect(repos[0].stars).toBe(5)
    expect(repos[1].stars).toBe(3)
    expect(repos[2].stars).toBe(2)

  });

})

describe('sortReposByStars()', () => {

  var testData = () => testData_1
  const issues = () => processHttpResponseData(testData()).issues

  it('sorts in descending order by stars', () => {
    // give default first repo in test data the lowest stars for testing
    const repoMap = organizeIssuesIntoRepos(issues())
    var repoArray = Array.from(repoMap.values())
    repoArray[0].stars = 1;

    const repos = sortReposByStars(repoMap)
    expect(repos[0].stars).toBe(13)
    expect(repos[1].stars).toBe(12)
    expect(repos[2].stars).toBe(1)
  })

  it('sort secondarily by issue count', () => {
    const repoMap = organizeIssuesIntoRepos(issues())
    var repoArray = Array.from(repoMap.values())
    // give all repos the same star count
    repoArray.forEach((repo) => repo.stars = 1)

    var fakeIssue = () => {name: 'fakeIssue'}
    repoArray[0].issues = [fakeIssue()]
    repoArray[1].issues = [fakeIssue(), fakeIssue()]
    repoArray[2].issues = [fakeIssue(), fakeIssue(), fakeIssue()]

    var repos = sortReposByStars(repoMap)
    expect(repos[0].issues.length).toBe(3)
    expect(repos[1].issues.length).toBe(2)
    expect(repos[2].issues.length).toBe(1)
  })
})
