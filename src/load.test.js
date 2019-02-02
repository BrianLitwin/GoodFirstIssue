
import { testData_1 } from './testdata'
import { getIssues, organizeIssuesIntoRepos, sortReposByIssueCount } from './load'

describe('getIssues()', () => {

  var testData = () => testData_1

  it('loads correct number of issues', () => {
    const issues = getIssues(testData()).issues
    expect(issues.length).toBe(4)
  });

  /* TODO: test paging info */
})

describe('organizeIssuesIntoRepos()', () => {

  var testData = () => testData_1

  it('has correct number of repos', () => {
    const issues = getIssues(testData()).issues
    const repos = organizeIssuesIntoRepos(issues)
    expect(repos.size).toBe(3)
  });

})

describe('sortReposByIssueCount()', () => {

  var testData = () => testData_1
  const issues = () => getIssues(testData()).issues
  const repoMap = () => organizeIssuesIntoRepos(issues())

  it('sorts in descending order', () => {
    const repos = sortReposByIssueCount(repoMap(), true)
    expect(repos[0].issues.length).toBe(2)
    expect(repos[1].issues.length).toBe(1)
  });

  it('sorts in ascending order if descending flag===true', () => {
    const repos = sortReposByIssueCount(repoMap(), false)
    expect(repos[0].issues.length).toBe(1)
    expect(repos[1].issues.length).toBe(1)
    expect(repos[2].issues.length).toBe(2)
  });
})
