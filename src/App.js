import React, { Component } from 'react';
import logo from './logo.svg';
import { data } from './testdata.js';
import './App.css';
import ResultsTable from './resultsTable'
import { Header } from './header'

class App extends Component {
  render() {
    console.log(data)
    return (
      <React.Fragment>
        {Header()}
        <ResultsTable data={data} />
      </React.Fragment>
    );
  }
}



export default App;
