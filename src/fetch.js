
export function beginFetch(
  language,
  labels,
  cuffoffDate,
  processHttpResponseData,
  fetchRequest,
  completionHandler
) {

  return {
    language: language,
    labels: labels,
    index: 0,
    issues: [],
    endCursor: undefined,
    cuffoffDate: cuffoffDate,

    fetchCompletion: function(httpResponseData) {
      const data = processHttpResponseData(httpResponseData)
      console.log("issues found: " + this.issues.length)

      var fetchNewLabel = () => {
        this.index += 1 // test 'index gets incremented '
        this.endCursor = undefined // test 'endCursor is reset to undefined after new label'
        this.fetch() // continue fetching, new label
      }

      // test: if data.issues is empty
      if (data.issues.length === 0) {
        fetchNewLabel()
      } else {
        sortByDate(data.issues) // test 'new issues are sorted'
        this.issues = this.issues.concat(data.issues) // test 'new issues are added' (and sorted)

        if (this.issues[this.issues.length - 1].date < cuffoffDate) { // test 'last label cuffoffDate is adhered to'
          fetchNewLabel()

        } else {
          this.endCursor = data.endCursor // test 'endCursor is set to recieved endCursor'
          this.fetch()
        }
      }
    },

    fetch: function() {
      if (this.index >= this.labels.length) { // test 'fetch terminates after last label is completed'
        completionHandler(this)
      } else {
        fetchRequest(
          this.language,
          this.labels[this.index],
          this.endCursor,
          (httpResponseData) => this.fetchCompletion(httpResponseData)
        )
      }
    }
  }
}


function sortByDate(issues) {
  issues.sort(function(a,b) {
    return new Date(b.date) - new Date(a.date);
  });
}
