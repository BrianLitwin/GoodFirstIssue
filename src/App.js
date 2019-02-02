import React, { Component } from 'react';
import './App.css';
import ResultsTable from './resultsTable'
import { Header } from './header'
import { loadTestData } from './load'

class App extends Component {
  render() {
    const data = loadTestData()
    return (
      <React.Fragment>
        {Header()}
        {<ResultsTable data={data}/>}
      </React.Fragment>
    );
  }
}



export default App;
