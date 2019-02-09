import React from 'react'
import {LanguagePicker} from './languagePicker'
import {LabelPicker} from './labelPicker'

export class OptionsDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {label: '', hidden: true }
  }

  render() {
    const {labels, handleLanguageChange} = this.props
    const {label, hidden} = this.state

    var handleNewLabelChange = (e) => this.setState({label: e.target.value})
    var handleNewLabelSubmit = (e) => {
      e.preventDefault()
      this.props.addLabel(label)
      this.setState({label: ''})
    }
    var showLabelsPicker = () => this.setState({hidden: !hidden})

    return(
      <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
        {<LanguagePicker handleChange={(language) => handleLanguageChange(language)}/>}
        {<LabelPicker
          labels={labels}
          newLabel={label}
          handleChange={handleNewLabelChange}
          handleSubmit={handleNewLabelSubmit}
          hidden={hidden}
        />}
        <button onClick={showLabelsPicker}>Edit Labels</button>
      </div>
    )
  }
}
