import React from 'react';
import './App.css';
import ResultsTable from './resultsTable'
import { Header } from './header'
import { loadTestData } from './load'
import { LanguagePicker } from './languagePicker'
import { LoadingSpinner } from './loadingSpinner'
import { LabelPicker } from './labelPicker'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: '',
      loading: false,
      data: loadTestData(),
      labels: [
        { active: true, label: 'good first issue' },
        { active: true, label: 'help wanted' }
      ]
    }
  }

  render() {
    const {data, language, loading, labels} = this.state

    var handleLanguageChange = (language) => {
      this.setState({
        language: language,
        loading: true,
      })
    }

    var finishedLoading = () => {

    }

    return (
      <React.Fragment>
        {Header()}
        {<LanguagePicker handleChange={(language) => handleLanguageChange(language)}/>}
        {<LabelPicker labels={labels}/>}
        {
          loading
          ? <LoadingSpinner />
          : <ResultsTable data={data} finishedLoading={()=>finishedLoading()}/>
        }
      </React.Fragment>
    );
  }
}


export default App;
