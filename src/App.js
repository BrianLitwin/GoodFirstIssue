import React from 'react';
import './App.css';
import ResultsTable from './resultsTable'
import { Header } from './header'
import { loadTestData } from './load'
import { LanguagePicker } from './languagePicker'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: '',
      loading: false
    }
  }

  render() {
    const data = loadTestData()
    const {language} = this.state

    var handleLanguageChange = (language) => this.setState({language: language})

    return (
      <React.Fragment>
        {Header()}
        {<LanguagePicker handleChange={(language) => handleLanguageChange(language)}/>}
        {<ResultsTable data={data}/>}
      </React.Fragment>
    );
  }
}


export default App;
