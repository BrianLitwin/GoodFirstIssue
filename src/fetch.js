// make these pure functions

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
      this.issues = this.issues.concat(data.issues); // test 'new issues are added' (and sorted)
      this.endCursor = data.endCursor;
      updateFetchMsg(this.issues.length);
      console.log(data.hasNextPage);
      if (!data.hasNextPage) {
        this.index += 1; // fetch new label
        this.endCursor = undefined;
      }
      this.fetch();
    },

    fetch: function() {
      if (this.index >= this.labels.length) {
        this.issues = this.issues.filter(iss => iss.updatedAt > cutoffDate);
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
