import React from "react";
import "./App.css";
import ResultsTable from "./resultsTable";
import { Header } from "./header";
import { organizeIssuesIntoRepos, processHttpResponseData } from "./load";
import { LoadingSpinner } from "./loadingSpinner";
import { OptionsDashboard } from "./optionsDashboard";
import { fetchQuery } from "./query";
import { testData_1 } from "./testdata";
import { beginFetch } from "./fetch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      loading: false,
      data: [],
      labels: ["good first issue", "help wanted"]
    };
  }

  render() {
    const { data, language, loading, labels } = this.state;

    var finishedLoading = data => {
      this.setState({
        loading: false,
        data: organizeIssuesIntoRepos(data.issues)
      });
    };

    var handleLanguageChange = language => {
      this.setState({
        language: language,
        loading: true
      });
      const day = 24 * 60 * 60 * 1000;
      const month = day * 30;
      const cutoffDate = Date.now() - month * 3;
      const fetchObject = beginFetch(
        language,
        labels,
        cutoffDate,
        processHttpResponseData,
        fetchQuery,
        finishedLoading
      );
      fetchObject.fetch();
    };

    var addLabel = label => this.setState({ labels: labels.concat(label) });

    return (
      <div
        style={{
          margin: "0 auto",
          maxWidth: 900
        }}
      >
        {Header()}
        <OptionsDashboard
          handleLanguageChange={handleLanguageChange}
          addLabel={addLabel}
          labels={labels}
        />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <ResultsTable data={data} finishedLoading={() => finishedLoading()} />
        )}
      </div>
    );
  }
}

export default App;
