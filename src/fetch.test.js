import {beginFetch} from './fetch';

describe('fetch object', () => {

  var issue = () => ({
    date: Date.now()
  })

  var issues = () => ({
    issues: [issue(), issue()],
    endCursor: "fjkdls"
  })

  var dummyFunction = () => { return }
  var processHttpResponseData = (data) => data

  var fetchObject = () => {
    return beginFetch(
      'C',
      ["good first issue", "help wanted"],
      Date.now,
      processHttpResponseData,
      dummyFunction,
      dummyFunction
    )
  }

  it('beginFetch() returns a properly initialized object', () => {
    const object = fetchObject()
    expect(object.language).toBe('C')
    expect(object.index).toBe(0)
    expect(object.labels.length).toBe(2)
    expect(object.issues.length).toBe(0)
    expect(object.endCursor).toBe(undefined)
  })

  it('fetchCompletion appends issues and updates endCursor', () => {
    const object = fetchObject()
    object.fetchCompletion(issues())
    expect(object.issues.length).toBe(2)
    expect(object.endCursor).toBe("fjkdls")
  })

  it('new issues are sorted by date', () => {
    var issues = {
      issues: [
        {id: 0, date:  Date.now() - 30},
        {id: 1, date: Date.now() - 10},
        {id: 2, date: Date.now() - 40},
        {id: 3, date: Date.now() - 5}
      ],
      endCursor: "fjkdls"
    }

    var object = fetchObject()
    object.fetchCompletion(issues)
    expect(object.issues[0].id).toBe(3)
    expect(object.issues[1].id).toBe(1)
    expect(object.issues[2].id).toBe(0)
    expect(object.issues[3].id).toBe(2)

  })

  it('if the issues fetched is an empty array, a new label is attempted', () => {
    var object = fetchObject()
    object.fetchCompletion({issues: []})
    expect(object.index).toBe(1)

  })

  it('if last label is < cutoff date,current label fetch ends and begins fetch for next label', () => {
    var issues = {
      issues: [
        {id: 0, date:  Date.now() - 30},
        {id: 1, date: Date.now() - 1},
        {id: 2, date: Date.now() - 40},
        {id: 3, date: Date.now() - 2}
      ],
      endCursor: "fjkdls"
    }

    const object = beginFetch(
      'C', ["label1", "label2"], Date.now() - 10, processHttpResponseData, dummyFunction, dummyFunction
    )
    object.fetchCompletion(issues)
    expect(object.index).toBe(1)
  })

  it('if last label is > cutoff date, current label fetch continues', () => {
    var issues = {
      issues: [
        {id: 0, date:  Date.now() - 30},
        {id: 1, date: Date.now() - 1},
        {id: 2, date: Date.now() - 40},
        {id: 3, date: Date.now() - 2}
      ],
      endCursor: "fjkdls"
    }

    const object = beginFetch(
      'C', ["label1", "label2"], Date.now() - 100, processHttpResponseData, dummyFunction, dummyFunction
    )
    object.fetchCompletion(issues)
    expect(object.index).toBe(0)
  })

  it('fetches end after last labels fetch cycle ends', () => {
    var completionCalled = false
    var completionHander = () => completionCalled = true
    const object = beginFetch(
      'C', ["label1", "label2"], Date.now() - 100, processHttpResponseData, dummyFunction, completionHander
    )
    object.index = 2
    object.fetch()
    expect(completionCalled).toBe(true)
  })
})
