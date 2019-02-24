import {daysAgo, formatDaysAgo} from './util'

describe('daysAgo()', () => {
  it("works", () => {
    const now = new Date("2019-01-26T10:42:30Z")
    const date = "2019-01-24T10:42:30Z"
    expect(daysAgo(date, now)).toBe(2)
  })
})

describe('formatDaysAgo()', () => {
  it("0 days", () => {
    const now = new Date("2019-01-24T10:42:30Z")
    const date = "2019-01-24T10:42:30Z"
    expect(formatDaysAgo(date, now)).toBe("today")
  })

  it("1 day", () => {
    const now = new Date("2019-01-25T10:42:30Z")
    const date = "2019-01-24T10:42:30Z"
    expect(formatDaysAgo(date, now)).toBe("1 day ago")
  })

  it("2 days", () => {
    const now = new Date("2019-01-26T10:42:30Z")
    const date = "2019-01-24T10:42:30Z"
    expect(formatDaysAgo(date, now)).toBe("2 days ago")
  })
})
