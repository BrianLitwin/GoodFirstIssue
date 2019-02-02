
import { testData_1 } from './testdata'
import { getIssues, organizeIssuesIntoRepos, sortReposByIssueCount, sortReposByStars } from './load'

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
    const repos = sortReposByIssueCount(repoMap())
    expect(repos[0].issues.length).toBe(2)
    expect(repos[1].issues.length).toBe(1)
  });
})

describe('sortReposByStars()', () => {

  var testData = () => testData_1
  const issues = () => getIssues(testData()).issues

  it('sorts in descending order', () => {
    // give default first repo in test data the lowest stars for testing 
    const repoMap = organizeIssuesIntoRepos(issues())
    var firstRepo = repoMap.get('abonas/kubeclient')
    firstRepo.stars = 1;

    const repos = sortReposByStars(repoMap)
    expect(repos[0].stars).toBe(13)
    expect(repos[1].stars).toBe(12)
    expect(repos[2].stars).toBe(1)
  })
})
