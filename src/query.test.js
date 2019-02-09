import {formatVariables} from './query'

describe('formatQuery()', () => {
  it('formats parameters correctly', () =>{
    const label = "easy contribution"
    const language = "C"
    const output = formatVariables(language, label)
    expect(output.query).toBe("label:\"easy contribution\" language:C state:open")
    expect(output.endCursor).toBe(undefined)
  })
})
