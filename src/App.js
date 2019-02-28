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
import { initMinDate } from "./util";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      loading: false,
      repositories: [],
      labels: ["good first issue", "help wanted"],
      loadingMessage: "Fetching Issues... ",
      minGoodFirstIssues: 1,
      minStars: 0,
      minDate: initMinDate(),
      expandedTableRows: new Set()
    };
  }

  render() {
    const {
      repositories,
      language,
      loading,
      labels,
      loadingMessage,
      minGoodFirstIssues,
      minStars,
      expandedTableRows,
      minDate
    } = this.state;

    const finishedLoading = data => {
      this.setState({
        loading: false,
        repositories: organizeIssuesIntoRepos(data.issues),
        loadingMessage: "Fetching Issues... ",
        expandedTableRows: new Set()
      });
    };

    const updateFetchMsg = n => {
      if (n > 0) {
        this.setState({ loadingMessage: loadingMessage + n });
      }
    };

    const handleLanguageChange = language => {
      if (language === "") {
        this.setState({
          language: "",
          loading: false,
          repositories: []
        });
      } else {
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
          minDate,
          processHttpResponseData,
          fetchQuery,
          finishedLoading,
          updateFetchMsg
        );
        fetchObject.fetch();
      }
    };

    const addLabel = label => this.setState({ labels: labels.concat(label) });
    const removelabel = n => {
      labels.splice(n, 1);
      this.setState({ labels });
    };

    const setMinGoodFirstIssues = n =>
      this.setState({ minGoodFirstIssues: n, expandedTableRows: new Set() });
    const setMinStars = n =>
      this.setState({ minStars: n, expandedTableRows: new Set() });

    const setExpandedTableRows = i => {
      const expandedTableRows = this.state.expandedTableRows;
      if (expandedTableRows.has(i)) {
        expandedTableRows.delete(i);
      } else {
        expandedTableRows.add(i);
      }
      this.setState(expandedTableRows);
    };

    const setMinDate = e => this.setState({ minDate: e.target.value });

    // filtering for minGoodFirstIssues and minStars
    const filteredRepositories = new Map();

    repositories.forEach(r => {
      if (r.stars >= minStars && r.issues.length >= minGoodFirstIssues) {
        filteredRepositories.set(r.title, repositories.get(r.title));
      }
    });

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
          removeLabel={removelabel}
          setMinGoodFirstIssues={setMinGoodFirstIssues}
          setMinStars={setMinStars}
          minDate={minDate}
          setMinDate={setMinDate}
        />
        {loading ? (
          <LoadingSpinner loadingMessage={loadingMessage} />
        ) : (
          <ResultsTable
            repositories={filteredRepositories}
            finishedLoading={() => finishedLoading()}
            setExpanded={setExpandedTableRows}
            expandedRows={expandedTableRows}
          />
        )}
      </div>
    );
  }
}

export default App;
