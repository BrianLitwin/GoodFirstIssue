export function beginFetch(
  language,
  labels,
  cutoffDate,
  processHttpResponseData,
  fetchQuery,
  completionHandler,
  updateFetchMsg
) {
  return {
    language: language,
    labels: labels,
    index: 0,
    issues: [],
    endCursor: undefined,
    cutoffDate: cutoffDate,

    fetchCompletion: function(httpResponseData) {
      const data = processHttpResponseData(httpResponseData);

      var fetchNewLabel = () => {
        this.index += 1; // test 'index gets incremented '
        this.endCursor = undefined; // test 'endCursor is reset to undefined after new label'
        this.fetch(); // continue fetching, new label
      };
      // test: if data.issues is empty
      if (data.issues.length === 0) {
        fetchNewLabel();
      } else {
        sortByDate(data.issues); // test 'new issues are sorted'

        // this may be quadratic
        this.issues = this.issues.concat(data.issues); // test 'new issues are added' (and sorted)
        updateFetchMsg(this.issues.length);

        if (this.issues[this.issues.length - 1].date < cutoffDate) {
          // test 'last label cuffoffDate is adhered to'
          fetchNewLabel();
        } else {
          this.endCursor = data.endCursor; // test 'endCursor is set to recieved endCursor'
          this.fetch();
        }
      }
    },

    fetch: function() {
      if (this.index >= this.labels.length) {
        // test 'fetch terminates after last label is completed'
        console.log(this.issues.length);
        this.issues = this.issues.filter(iss => iss.updatedAt > cutoffDate);
        console.log(this.issues.length);
        completionHandler(this);
      } else {
        fetchQuery(
          this.language,
          this.labels[this.index],
          this.cutoffDate,
          this.endCursor,
          httpResponseData => this.fetchCompletion(httpResponseData)
        );
      }
    }
  };
}

function sortByDate(issues) {
  issues.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  });
}
